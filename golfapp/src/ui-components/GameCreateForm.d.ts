/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type GameCreateFormInputValues = {
    player1?: string;
    player2?: string;
    player3?: string;
    player4?: string;
    date?: string;
    player1Score?: number[];
    player2Score?: number[];
    player3Score?: number[];
    player4Score?: number[];
    complete?: boolean;
    leader?: string;
};
export declare type GameCreateFormValidationValues = {
    player1?: ValidationFunction<string>;
    player2?: ValidationFunction<string>;
    player3?: ValidationFunction<string>;
    player4?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    player1Score?: ValidationFunction<number>;
    player2Score?: ValidationFunction<number>;
    player3Score?: ValidationFunction<number>;
    player4Score?: ValidationFunction<number>;
    complete?: ValidationFunction<boolean>;
    leader?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GameCreateFormOverridesProps = {
    GameCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    player1?: PrimitiveOverrideProps<TextFieldProps>;
    player2?: PrimitiveOverrideProps<TextFieldProps>;
    player3?: PrimitiveOverrideProps<TextFieldProps>;
    player4?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    player1Score?: PrimitiveOverrideProps<TextFieldProps>;
    player2Score?: PrimitiveOverrideProps<TextFieldProps>;
    player3Score?: PrimitiveOverrideProps<TextFieldProps>;
    player4Score?: PrimitiveOverrideProps<TextFieldProps>;
    complete?: PrimitiveOverrideProps<SwitchFieldProps>;
    leader?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GameCreateFormProps = React.PropsWithChildren<{
    overrides?: GameCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: GameCreateFormInputValues) => GameCreateFormInputValues;
    onSuccess?: (fields: GameCreateFormInputValues) => void;
    onError?: (fields: GameCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GameCreateFormInputValues) => GameCreateFormInputValues;
    onValidate?: GameCreateFormValidationValues;
} & React.CSSProperties>;
export default function GameCreateForm(props: GameCreateFormProps): React.ReactElement;
