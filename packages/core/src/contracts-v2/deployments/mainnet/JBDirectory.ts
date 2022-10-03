/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../../../common";

export interface JBDirectoryInterface extends utils.Interface {
  functions: {
    "controllerOf(uint256)": FunctionFragment;
    "fundingCycleStore()": FunctionFragment;
    "isAllowedToSetFirstController(address)": FunctionFragment;
    "isTerminalOf(uint256,address)": FunctionFragment;
    "operatorStore()": FunctionFragment;
    "owner()": FunctionFragment;
    "primaryTerminalOf(uint256,address)": FunctionFragment;
    "projects()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setControllerOf(uint256,address)": FunctionFragment;
    "setIsAllowedToSetFirstController(address,bool)": FunctionFragment;
    "setPrimaryTerminalOf(uint256,address,address)": FunctionFragment;
    "setTerminalsOf(uint256,address[])": FunctionFragment;
    "terminalsOf(uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "controllerOf"
      | "fundingCycleStore"
      | "isAllowedToSetFirstController"
      | "isTerminalOf"
      | "operatorStore"
      | "owner"
      | "primaryTerminalOf"
      | "projects"
      | "renounceOwnership"
      | "setControllerOf"
      | "setIsAllowedToSetFirstController"
      | "setPrimaryTerminalOf"
      | "setTerminalsOf"
      | "terminalsOf"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "controllerOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "fundingCycleStore",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isAllowedToSetFirstController",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isTerminalOf",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "operatorStore",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "primaryTerminalOf",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "projects", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setControllerOf",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setIsAllowedToSetFirstController",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setPrimaryTerminalOf",
    values: [BigNumberish, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setTerminalsOf",
    values: [BigNumberish, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "terminalsOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "controllerOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fundingCycleStore",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isAllowedToSetFirstController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isTerminalOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "operatorStore",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "primaryTerminalOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "projects", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setControllerOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setIsAllowedToSetFirstController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPrimaryTerminalOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTerminalsOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "terminalsOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "AddTerminal(uint256,address,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "SetController(uint256,address,address)": EventFragment;
    "SetIsAllowedToSetFirstController(address,bool,address)": EventFragment;
    "SetPrimaryTerminal(uint256,address,address,address)": EventFragment;
    "SetTerminals(uint256,address[],address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddTerminal"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetController"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "SetIsAllowedToSetFirstController"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetPrimaryTerminal"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetTerminals"): EventFragment;
}

export interface AddTerminalEventObject {
  projectId: BigNumber;
  terminal: string;
  caller: string;
}
export type AddTerminalEvent = TypedEvent<
  [BigNumber, string, string],
  AddTerminalEventObject
>;

export type AddTerminalEventFilter = TypedEventFilter<AddTerminalEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface SetControllerEventObject {
  projectId: BigNumber;
  controller: string;
  caller: string;
}
export type SetControllerEvent = TypedEvent<
  [BigNumber, string, string],
  SetControllerEventObject
>;

export type SetControllerEventFilter = TypedEventFilter<SetControllerEvent>;

export interface SetIsAllowedToSetFirstControllerEventObject {
  addr: string;
  flag: boolean;
  caller: string;
}
export type SetIsAllowedToSetFirstControllerEvent = TypedEvent<
  [string, boolean, string],
  SetIsAllowedToSetFirstControllerEventObject
>;

export type SetIsAllowedToSetFirstControllerEventFilter =
  TypedEventFilter<SetIsAllowedToSetFirstControllerEvent>;

export interface SetPrimaryTerminalEventObject {
  projectId: BigNumber;
  token: string;
  terminal: string;
  caller: string;
}
export type SetPrimaryTerminalEvent = TypedEvent<
  [BigNumber, string, string, string],
  SetPrimaryTerminalEventObject
>;

export type SetPrimaryTerminalEventFilter =
  TypedEventFilter<SetPrimaryTerminalEvent>;

export interface SetTerminalsEventObject {
  projectId: BigNumber;
  terminals: string[];
  caller: string;
}
export type SetTerminalsEvent = TypedEvent<
  [BigNumber, string[], string],
  SetTerminalsEventObject
>;

export type SetTerminalsEventFilter = TypedEventFilter<SetTerminalsEvent>;

export interface JBDirectory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: JBDirectoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    /**
     *  For each project ID, the controller that manages how terminals interact with tokens and funding cycles. _projectId The ID of the project to get the controller of.
     */
    controllerOf(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    /**
     * The contract storing all funding cycle configurations.
     */
    fundingCycleStore(overrides?: CallOverrides): Promise<[string]>;

    /**
     * Addresses that can set a project's first controller on their behalf. These addresses/contracts have been vetted and verified by this contract's owner. _address The address that is either allowed or not.
     */
    isAllowedToSetFirstController(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    /**
     * Whether or not a specified terminal is a terminal of the specified project.
     * @param _projectId The ID of the project to check within.
     * @param _terminal The address of the terminal to check for.
     */
    isTerminalOf(
      _projectId: BigNumberish,
      _terminal: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    /**
     *  A contract storing operator assignments.
     */
    operatorStore(overrides?: CallOverrides): Promise<[string]>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<[string]>;

    /**
     * The zero address is returned if a terminal isn't found for the specified token.
     * The primary terminal that is managing funds for a project for a specified token.
     * @param _projectId The ID of the project to get a terminal for.
     * @param _token The token the terminal accepts.
     */
    primaryTerminalOf(
      _projectId: BigNumberish,
      _token: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    /**
     * Mints ERC-721's that represent project ownership and transfers.
     */
    projects(overrides?: CallOverrides): Promise<[string]>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * A controller can be set if: - the message sender is the project owner or an operator having the correct authorization. - the message sender is the project's current controller. - or, an allowedlisted address is setting a controller for a project that doesn't already have a controller.
     * Update the controller that manages how terminals interact with the ecosystem.
     * @param _controller The new controller to set.
     * @param _projectId The ID of the project to set a new controller for.
     */
    setControllerOf(
      _projectId: BigNumberish,
      _controller: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * The owner can add addresses which are allowed to change projects' first controllers.  These addresses are known and vetted controllers as well as contracts designed to launch new projects.  A project can set its own controller without it being on the allow list.If you would like an address/contract allowlisted, please reach out to the contract owner.
     *  Set a contract to the list of trusted addresses that can set a first controller for any project.
     * @param _address The address to allow or revoke allowance from.
     * @param _flag Whether allowance is being added or revoked.
     */
    setIsAllowedToSetFirstController(
      _address: string,
      _flag: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * The terminal will be set as the primary terminal where ecosystem contracts should route tokens.If setting a newly added terminal and the funding cycle doesn't allow new terminals, the caller must be the current controller.
     * Project's can set which terminal should be their primary for a particular token. This is useful in case a project has several terminals connected for a particular token.
     * @param _projectId The ID of the project for which a primary token is being set.
     * @param _terminal The terminal to make primary.
     * @param _token The token to set the primary terminal of.
     */
    setPrimaryTerminalOf(
      _projectId: BigNumberish,
      _token: string,
      _terminal: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * Only a project owner, an operator, or its controller can set its terminals.
     *  Set a project's terminals.
     * @param _projectId The ID of the project having terminals set.
     * @param _terminals The terminal to set.
     */
    setTerminalsOf(
      _projectId: BigNumberish,
      _terminals: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * For each project ID, the terminals that are currently managing its funds.
     * @param _projectId The ID of the project to get terminals of.
     */
    terminalsOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  /**
   *  For each project ID, the controller that manages how terminals interact with tokens and funding cycles. _projectId The ID of the project to get the controller of.
   */
  controllerOf(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  /**
   * The contract storing all funding cycle configurations.
   */
  fundingCycleStore(overrides?: CallOverrides): Promise<string>;

  /**
   * Addresses that can set a project's first controller on their behalf. These addresses/contracts have been vetted and verified by this contract's owner. _address The address that is either allowed or not.
   */
  isAllowedToSetFirstController(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  /**
   * Whether or not a specified terminal is a terminal of the specified project.
   * @param _projectId The ID of the project to check within.
   * @param _terminal The address of the terminal to check for.
   */
  isTerminalOf(
    _projectId: BigNumberish,
    _terminal: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  /**
   *  A contract storing operator assignments.
   */
  operatorStore(overrides?: CallOverrides): Promise<string>;

  /**
   * Returns the address of the current owner.
   */
  owner(overrides?: CallOverrides): Promise<string>;

  /**
   * The zero address is returned if a terminal isn't found for the specified token.
   * The primary terminal that is managing funds for a project for a specified token.
   * @param _projectId The ID of the project to get a terminal for.
   * @param _token The token the terminal accepts.
   */
  primaryTerminalOf(
    _projectId: BigNumberish,
    _token: string,
    overrides?: CallOverrides
  ): Promise<string>;

  /**
   * Mints ERC-721's that represent project ownership and transfers.
   */
  projects(overrides?: CallOverrides): Promise<string>;

  /**
   * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
   */
  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * A controller can be set if: - the message sender is the project owner or an operator having the correct authorization. - the message sender is the project's current controller. - or, an allowedlisted address is setting a controller for a project that doesn't already have a controller.
   * Update the controller that manages how terminals interact with the ecosystem.
   * @param _controller The new controller to set.
   * @param _projectId The ID of the project to set a new controller for.
   */
  setControllerOf(
    _projectId: BigNumberish,
    _controller: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * The owner can add addresses which are allowed to change projects' first controllers.  These addresses are known and vetted controllers as well as contracts designed to launch new projects.  A project can set its own controller without it being on the allow list.If you would like an address/contract allowlisted, please reach out to the contract owner.
   *  Set a contract to the list of trusted addresses that can set a first controller for any project.
   * @param _address The address to allow or revoke allowance from.
   * @param _flag Whether allowance is being added or revoked.
   */
  setIsAllowedToSetFirstController(
    _address: string,
    _flag: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * The terminal will be set as the primary terminal where ecosystem contracts should route tokens.If setting a newly added terminal and the funding cycle doesn't allow new terminals, the caller must be the current controller.
   * Project's can set which terminal should be their primary for a particular token. This is useful in case a project has several terminals connected for a particular token.
   * @param _projectId The ID of the project for which a primary token is being set.
   * @param _terminal The terminal to make primary.
   * @param _token The token to set the primary terminal of.
   */
  setPrimaryTerminalOf(
    _projectId: BigNumberish,
    _token: string,
    _terminal: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * Only a project owner, an operator, or its controller can set its terminals.
   *  Set a project's terminals.
   * @param _projectId The ID of the project having terminals set.
   * @param _terminals The terminal to set.
   */
  setTerminalsOf(
    _projectId: BigNumberish,
    _terminals: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * For each project ID, the terminals that are currently managing its funds.
   * @param _projectId The ID of the project to get terminals of.
   */
  terminalsOf(
    _projectId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string[]>;

  /**
   * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
   */
  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    /**
     *  For each project ID, the controller that manages how terminals interact with tokens and funding cycles. _projectId The ID of the project to get the controller of.
     */
    controllerOf(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    /**
     * The contract storing all funding cycle configurations.
     */
    fundingCycleStore(overrides?: CallOverrides): Promise<string>;

    /**
     * Addresses that can set a project's first controller on their behalf. These addresses/contracts have been vetted and verified by this contract's owner. _address The address that is either allowed or not.
     */
    isAllowedToSetFirstController(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    /**
     * Whether or not a specified terminal is a terminal of the specified project.
     * @param _projectId The ID of the project to check within.
     * @param _terminal The address of the terminal to check for.
     */
    isTerminalOf(
      _projectId: BigNumberish,
      _terminal: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    /**
     *  A contract storing operator assignments.
     */
    operatorStore(overrides?: CallOverrides): Promise<string>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<string>;

    /**
     * The zero address is returned if a terminal isn't found for the specified token.
     * The primary terminal that is managing funds for a project for a specified token.
     * @param _projectId The ID of the project to get a terminal for.
     * @param _token The token the terminal accepts.
     */
    primaryTerminalOf(
      _projectId: BigNumberish,
      _token: string,
      overrides?: CallOverrides
    ): Promise<string>;

    /**
     * Mints ERC-721's that represent project ownership and transfers.
     */
    projects(overrides?: CallOverrides): Promise<string>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    /**
     * A controller can be set if: - the message sender is the project owner or an operator having the correct authorization. - the message sender is the project's current controller. - or, an allowedlisted address is setting a controller for a project that doesn't already have a controller.
     * Update the controller that manages how terminals interact with the ecosystem.
     * @param _controller The new controller to set.
     * @param _projectId The ID of the project to set a new controller for.
     */
    setControllerOf(
      _projectId: BigNumberish,
      _controller: string,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * The owner can add addresses which are allowed to change projects' first controllers.  These addresses are known and vetted controllers as well as contracts designed to launch new projects.  A project can set its own controller without it being on the allow list.If you would like an address/contract allowlisted, please reach out to the contract owner.
     *  Set a contract to the list of trusted addresses that can set a first controller for any project.
     * @param _address The address to allow or revoke allowance from.
     * @param _flag Whether allowance is being added or revoked.
     */
    setIsAllowedToSetFirstController(
      _address: string,
      _flag: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * The terminal will be set as the primary terminal where ecosystem contracts should route tokens.If setting a newly added terminal and the funding cycle doesn't allow new terminals, the caller must be the current controller.
     * Project's can set which terminal should be their primary for a particular token. This is useful in case a project has several terminals connected for a particular token.
     * @param _projectId The ID of the project for which a primary token is being set.
     * @param _terminal The terminal to make primary.
     * @param _token The token to set the primary terminal of.
     */
    setPrimaryTerminalOf(
      _projectId: BigNumberish,
      _token: string,
      _terminal: string,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Only a project owner, an operator, or its controller can set its terminals.
     *  Set a project's terminals.
     * @param _projectId The ID of the project having terminals set.
     * @param _terminals The terminal to set.
     */
    setTerminalsOf(
      _projectId: BigNumberish,
      _terminals: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * For each project ID, the terminals that are currently managing its funds.
     * @param _projectId The ID of the project to get terminals of.
     */
    terminalsOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string[]>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AddTerminal(uint256,address,address)"(
      projectId?: BigNumberish | null,
      terminal?: string | null,
      caller?: null
    ): AddTerminalEventFilter;
    AddTerminal(
      projectId?: BigNumberish | null,
      terminal?: string | null,
      caller?: null
    ): AddTerminalEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "SetController(uint256,address,address)"(
      projectId?: BigNumberish | null,
      controller?: string | null,
      caller?: null
    ): SetControllerEventFilter;
    SetController(
      projectId?: BigNumberish | null,
      controller?: string | null,
      caller?: null
    ): SetControllerEventFilter;

    "SetIsAllowedToSetFirstController(address,bool,address)"(
      addr?: string | null,
      flag?: boolean | null,
      caller?: null
    ): SetIsAllowedToSetFirstControllerEventFilter;
    SetIsAllowedToSetFirstController(
      addr?: string | null,
      flag?: boolean | null,
      caller?: null
    ): SetIsAllowedToSetFirstControllerEventFilter;

    "SetPrimaryTerminal(uint256,address,address,address)"(
      projectId?: BigNumberish | null,
      token?: string | null,
      terminal?: string | null,
      caller?: null
    ): SetPrimaryTerminalEventFilter;
    SetPrimaryTerminal(
      projectId?: BigNumberish | null,
      token?: string | null,
      terminal?: string | null,
      caller?: null
    ): SetPrimaryTerminalEventFilter;

    "SetTerminals(uint256,address[],address)"(
      projectId?: BigNumberish | null,
      terminals?: null,
      caller?: null
    ): SetTerminalsEventFilter;
    SetTerminals(
      projectId?: BigNumberish | null,
      terminals?: null,
      caller?: null
    ): SetTerminalsEventFilter;
  };

  estimateGas: {
    /**
     *  For each project ID, the controller that manages how terminals interact with tokens and funding cycles. _projectId The ID of the project to get the controller of.
     */
    controllerOf(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * The contract storing all funding cycle configurations.
     */
    fundingCycleStore(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Addresses that can set a project's first controller on their behalf. These addresses/contracts have been vetted and verified by this contract's owner. _address The address that is either allowed or not.
     */
    isAllowedToSetFirstController(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Whether or not a specified terminal is a terminal of the specified project.
     * @param _projectId The ID of the project to check within.
     * @param _terminal The address of the terminal to check for.
     */
    isTerminalOf(
      _projectId: BigNumberish,
      _terminal: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     *  A contract storing operator assignments.
     */
    operatorStore(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * The zero address is returned if a terminal isn't found for the specified token.
     * The primary terminal that is managing funds for a project for a specified token.
     * @param _projectId The ID of the project to get a terminal for.
     * @param _token The token the terminal accepts.
     */
    primaryTerminalOf(
      _projectId: BigNumberish,
      _token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Mints ERC-721's that represent project ownership and transfers.
     */
    projects(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * A controller can be set if: - the message sender is the project owner or an operator having the correct authorization. - the message sender is the project's current controller. - or, an allowedlisted address is setting a controller for a project that doesn't already have a controller.
     * Update the controller that manages how terminals interact with the ecosystem.
     * @param _controller The new controller to set.
     * @param _projectId The ID of the project to set a new controller for.
     */
    setControllerOf(
      _projectId: BigNumberish,
      _controller: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * The owner can add addresses which are allowed to change projects' first controllers.  These addresses are known and vetted controllers as well as contracts designed to launch new projects.  A project can set its own controller without it being on the allow list.If you would like an address/contract allowlisted, please reach out to the contract owner.
     *  Set a contract to the list of trusted addresses that can set a first controller for any project.
     * @param _address The address to allow or revoke allowance from.
     * @param _flag Whether allowance is being added or revoked.
     */
    setIsAllowedToSetFirstController(
      _address: string,
      _flag: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * The terminal will be set as the primary terminal where ecosystem contracts should route tokens.If setting a newly added terminal and the funding cycle doesn't allow new terminals, the caller must be the current controller.
     * Project's can set which terminal should be their primary for a particular token. This is useful in case a project has several terminals connected for a particular token.
     * @param _projectId The ID of the project for which a primary token is being set.
     * @param _terminal The terminal to make primary.
     * @param _token The token to set the primary terminal of.
     */
    setPrimaryTerminalOf(
      _projectId: BigNumberish,
      _token: string,
      _terminal: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * Only a project owner, an operator, or its controller can set its terminals.
     *  Set a project's terminals.
     * @param _projectId The ID of the project having terminals set.
     * @param _terminals The terminal to set.
     */
    setTerminalsOf(
      _projectId: BigNumberish,
      _terminals: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * For each project ID, the terminals that are currently managing its funds.
     * @param _projectId The ID of the project to get terminals of.
     */
    terminalsOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     *  For each project ID, the controller that manages how terminals interact with tokens and funding cycles. _projectId The ID of the project to get the controller of.
     */
    controllerOf(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * The contract storing all funding cycle configurations.
     */
    fundingCycleStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Addresses that can set a project's first controller on their behalf. These addresses/contracts have been vetted and verified by this contract's owner. _address The address that is either allowed or not.
     */
    isAllowedToSetFirstController(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Whether or not a specified terminal is a terminal of the specified project.
     * @param _projectId The ID of the project to check within.
     * @param _terminal The address of the terminal to check for.
     */
    isTerminalOf(
      _projectId: BigNumberish,
      _terminal: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     *  A contract storing operator assignments.
     */
    operatorStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * The zero address is returned if a terminal isn't found for the specified token.
     * The primary terminal that is managing funds for a project for a specified token.
     * @param _projectId The ID of the project to get a terminal for.
     * @param _token The token the terminal accepts.
     */
    primaryTerminalOf(
      _projectId: BigNumberish,
      _token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Mints ERC-721's that represent project ownership and transfers.
     */
    projects(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * A controller can be set if: - the message sender is the project owner or an operator having the correct authorization. - the message sender is the project's current controller. - or, an allowedlisted address is setting a controller for a project that doesn't already have a controller.
     * Update the controller that manages how terminals interact with the ecosystem.
     * @param _controller The new controller to set.
     * @param _projectId The ID of the project to set a new controller for.
     */
    setControllerOf(
      _projectId: BigNumberish,
      _controller: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * The owner can add addresses which are allowed to change projects' first controllers.  These addresses are known and vetted controllers as well as contracts designed to launch new projects.  A project can set its own controller without it being on the allow list.If you would like an address/contract allowlisted, please reach out to the contract owner.
     *  Set a contract to the list of trusted addresses that can set a first controller for any project.
     * @param _address The address to allow or revoke allowance from.
     * @param _flag Whether allowance is being added or revoked.
     */
    setIsAllowedToSetFirstController(
      _address: string,
      _flag: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * The terminal will be set as the primary terminal where ecosystem contracts should route tokens.If setting a newly added terminal and the funding cycle doesn't allow new terminals, the caller must be the current controller.
     * Project's can set which terminal should be their primary for a particular token. This is useful in case a project has several terminals connected for a particular token.
     * @param _projectId The ID of the project for which a primary token is being set.
     * @param _terminal The terminal to make primary.
     * @param _token The token to set the primary terminal of.
     */
    setPrimaryTerminalOf(
      _projectId: BigNumberish,
      _token: string,
      _terminal: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Only a project owner, an operator, or its controller can set its terminals.
     *  Set a project's terminals.
     * @param _projectId The ID of the project having terminals set.
     * @param _terminals The terminal to set.
     */
    setTerminalsOf(
      _projectId: BigNumberish,
      _terminals: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * For each project ID, the terminals that are currently managing its funds.
     * @param _projectId The ID of the project to get terminals of.
     */
    terminalsOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}