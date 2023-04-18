/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Game } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function GameUpdateForm(props) {
  const {
    id: idProp,
    game: gameModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    player1: "",
    player2: "",
    player3: "",
    player4: "",
    date: "",
    player1Score: "",
    player2Score: "",
    player3Score: [],
    complete: false,
    leader: "",
  };
  const [player1, setPlayer1] = React.useState(initialValues.player1);
  const [player2, setPlayer2] = React.useState(initialValues.player2);
  const [player3, setPlayer3] = React.useState(initialValues.player3);
  const [player4, setPlayer4] = React.useState(initialValues.player4);
  const [date, setDate] = React.useState(initialValues.date);
  const [player1Score, setPlayer1Score] = React.useState(
    initialValues.player1Score
  );
  const [player2Score, setPlayer2Score] = React.useState(
    initialValues.player2Score
  );
  const [player3Score, setPlayer3Score] = React.useState(
    initialValues.player3Score
  );
  const [complete, setComplete] = React.useState(initialValues.complete);
  const [leader, setLeader] = React.useState(initialValues.leader);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = gameRecord
      ? { ...initialValues, ...gameRecord }
      : initialValues;
    setPlayer1(cleanValues.player1);
    setPlayer2(cleanValues.player2);
    setPlayer3(cleanValues.player3);
    setPlayer4(cleanValues.player4);
    setDate(cleanValues.date);
    setPlayer1Score(cleanValues.player1Score);
    setPlayer2Score(cleanValues.player2Score);
    setPlayer3Score(cleanValues.player3Score ?? []);
    setCurrentPlayer3ScoreValue("");
    setComplete(cleanValues.complete);
    setLeader(cleanValues.leader);
    setErrors({});
  };
  const [gameRecord, setGameRecord] = React.useState(gameModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Game, idProp)
        : gameModelProp;
      setGameRecord(record);
    };
    queryData();
  }, [idProp, gameModelProp]);
  React.useEffect(resetStateValues, [gameRecord]);
  const [currentPlayer3ScoreValue, setCurrentPlayer3ScoreValue] =
    React.useState("");
  const player3ScoreRef = React.createRef();
  const validations = {
    player1: [],
    player2: [],
    player3: [],
    player4: [],
    date: [],
    player1Score: [],
    player2Score: [],
    player3Score: [],
    complete: [],
    leader: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          player1,
          player2,
          player3,
          player4,
          date,
          player1Score,
          player2Score,
          player3Score,
          complete,
          leader,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Game.copyOf(gameRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "GameUpdateForm")}
      {...rest}
    >
      <TextField
        label="Player1"
        isRequired={false}
        isReadOnly={false}
        value={player1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              player1: value,
              player2,
              player3,
              player4,
              date,
              player1Score,
              player2Score,
              player3Score,
              complete,
              leader,
            };
            const result = onChange(modelFields);
            value = result?.player1 ?? value;
          }
          if (errors.player1?.hasError) {
            runValidationTasks("player1", value);
          }
          setPlayer1(value);
        }}
        onBlur={() => runValidationTasks("player1", player1)}
        errorMessage={errors.player1?.errorMessage}
        hasError={errors.player1?.hasError}
        {...getOverrideProps(overrides, "player1")}
      ></TextField>
      <TextField
        label="Player2"
        isRequired={false}
        isReadOnly={false}
        value={player2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              player1,
              player2: value,
              player3,
              player4,
              date,
              player1Score,
              player2Score,
              player3Score,
              complete,
              leader,
            };
            const result = onChange(modelFields);
            value = result?.player2 ?? value;
          }
          if (errors.player2?.hasError) {
            runValidationTasks("player2", value);
          }
          setPlayer2(value);
        }}
        onBlur={() => runValidationTasks("player2", player2)}
        errorMessage={errors.player2?.errorMessage}
        hasError={errors.player2?.hasError}
        {...getOverrideProps(overrides, "player2")}
      ></TextField>
      <TextField
        label="Player3"
        isRequired={false}
        isReadOnly={false}
        value={player3}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              player1,
              player2,
              player3: value,
              player4,
              date,
              player1Score,
              player2Score,
              player3Score,
              complete,
              leader,
            };
            const result = onChange(modelFields);
            value = result?.player3 ?? value;
          }
          if (errors.player3?.hasError) {
            runValidationTasks("player3", value);
          }
          setPlayer3(value);
        }}
        onBlur={() => runValidationTasks("player3", player3)}
        errorMessage={errors.player3?.errorMessage}
        hasError={errors.player3?.hasError}
        {...getOverrideProps(overrides, "player3")}
      ></TextField>
      <TextField
        label="Player4"
        isRequired={false}
        isReadOnly={false}
        value={player4}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              player1,
              player2,
              player3,
              player4: value,
              date,
              player1Score,
              player2Score,
              player3Score,
              complete,
              leader,
            };
            const result = onChange(modelFields);
            value = result?.player4 ?? value;
          }
          if (errors.player4?.hasError) {
            runValidationTasks("player4", value);
          }
          setPlayer4(value);
        }}
        onBlur={() => runValidationTasks("player4", player4)}
        errorMessage={errors.player4?.errorMessage}
        hasError={errors.player4?.hasError}
        {...getOverrideProps(overrides, "player4")}
      ></TextField>
      <TextField
        label="Date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              player1,
              player2,
              player3,
              player4,
              date: value,
              player1Score,
              player2Score,
              player3Score,
              complete,
              leader,
            };
            const result = onChange(modelFields);
            value = result?.date ?? value;
          }
          if (errors.date?.hasError) {
            runValidationTasks("date", value);
          }
          setDate(value);
        }}
        onBlur={() => runValidationTasks("date", date)}
        errorMessage={errors.date?.errorMessage}
        hasError={errors.date?.hasError}
        {...getOverrideProps(overrides, "date")}
      ></TextField>
      <TextField
        label="Player1 score"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={player1Score}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              player1,
              player2,
              player3,
              player4,
              date,
              player1Score: value,
              player2Score,
              player3Score,
              complete,
              leader,
            };
            const result = onChange(modelFields);
            value = result?.player1Score ?? value;
          }
          if (errors.player1Score?.hasError) {
            runValidationTasks("player1Score", value);
          }
          setPlayer1Score(value);
        }}
        onBlur={() => runValidationTasks("player1Score", player1Score)}
        errorMessage={errors.player1Score?.errorMessage}
        hasError={errors.player1Score?.hasError}
        {...getOverrideProps(overrides, "player1Score")}
      ></TextField>
      <TextField
        label="Player2 score"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={player2Score}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              player1,
              player2,
              player3,
              player4,
              date,
              player1Score,
              player2Score: value,
              player3Score,
              complete,
              leader,
            };
            const result = onChange(modelFields);
            value = result?.player2Score ?? value;
          }
          if (errors.player2Score?.hasError) {
            runValidationTasks("player2Score", value);
          }
          setPlayer2Score(value);
        }}
        onBlur={() => runValidationTasks("player2Score", player2Score)}
        errorMessage={errors.player2Score?.errorMessage}
        hasError={errors.player2Score?.hasError}
        {...getOverrideProps(overrides, "player2Score")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              player1,
              player2,
              player3,
              player4,
              date,
              player1Score,
              player2Score,
              player3Score: values,
              complete,
              leader,
            };
            const result = onChange(modelFields);
            values = result?.player3Score ?? values;
          }
          setPlayer3Score(values);
          setCurrentPlayer3ScoreValue("");
        }}
        currentFieldValue={currentPlayer3ScoreValue}
        label={"Player3 score"}
        items={player3Score}
        hasError={errors?.player3Score?.hasError}
        errorMessage={errors?.player3Score?.errorMessage}
        setFieldValue={setCurrentPlayer3ScoreValue}
        inputFieldRef={player3ScoreRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Player3 score"
          isRequired={false}
          isReadOnly={false}
          type="number"
          step="any"
          value={currentPlayer3ScoreValue}
          onChange={(e) => {
            let value = isNaN(parseInt(e.target.value))
              ? e.target.value
              : parseInt(e.target.value);
            if (errors.player3Score?.hasError) {
              runValidationTasks("player3Score", value);
            }
            setCurrentPlayer3ScoreValue(value);
          }}
          onBlur={() =>
            runValidationTasks("player3Score", currentPlayer3ScoreValue)
          }
          errorMessage={errors.player3Score?.errorMessage}
          hasError={errors.player3Score?.hasError}
          ref={player3ScoreRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "player3Score")}
        ></TextField>
      </ArrayField>
      <SwitchField
        label="Complete"
        defaultChecked={false}
        isDisabled={false}
        isChecked={complete}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              player1,
              player2,
              player3,
              player4,
              date,
              player1Score,
              player2Score,
              player3Score,
              complete: value,
              leader,
            };
            const result = onChange(modelFields);
            value = result?.complete ?? value;
          }
          if (errors.complete?.hasError) {
            runValidationTasks("complete", value);
          }
          setComplete(value);
        }}
        onBlur={() => runValidationTasks("complete", complete)}
        errorMessage={errors.complete?.errorMessage}
        hasError={errors.complete?.hasError}
        {...getOverrideProps(overrides, "complete")}
      ></SwitchField>
      <TextField
        label="Leader"
        isRequired={false}
        isReadOnly={false}
        value={leader}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              player1,
              player2,
              player3,
              player4,
              date,
              player1Score,
              player2Score,
              player3Score,
              complete,
              leader: value,
            };
            const result = onChange(modelFields);
            value = result?.leader ?? value;
          }
          if (errors.leader?.hasError) {
            runValidationTasks("leader", value);
          }
          setLeader(value);
        }}
        onBlur={() => runValidationTasks("leader", leader)}
        errorMessage={errors.leader?.errorMessage}
        hasError={errors.leader?.hasError}
        {...getOverrideProps(overrides, "leader")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || gameModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || gameModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
