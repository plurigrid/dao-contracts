/**
* This file was automatically generated by cosmwasm-typescript-gen@0.3.6.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the cosmwasm-typescript-gen generate command to regenerate this file.
*/

import { CosmWasmClient, ExecuteResult, SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
export type ExecuteMsg = {
  receive_nft: Cw721ReceiveMsg;
} | {
  unstake: {
    token_ids: string[];
    [k: string]: unknown;
  };
} | {
  claim_nfts: {
    [k: string]: unknown;
  };
} | {
  update_config: {
    duration?: Duration | null;
    manager?: string | null;
    owner?: string | null;
    [k: string]: unknown;
  };
} | {
  add_hook: {
    addr: string;
    [k: string]: unknown;
  };
} | {
  remove_hook: {
    addr: string;
    [k: string]: unknown;
  };
};
export type Binary = string;
export type Duration = {
  height: number;
} | {
  time: number;
};
export interface Cw721ReceiveMsg {
  msg: Binary;
  sender: string;
  token_id: string;
  [k: string]: unknown;
}
export type Addr = string;
export interface GetConfigResponse {
  manager?: Addr | null;
  nft_address: Addr;
  owner?: Addr | null;
  unstaking_duration?: Duration | null;
  [k: string]: unknown;
}
export interface GetHooksResponse {
  hooks: string[];
  [k: string]: unknown;
}
export interface InfoResponse {
  info: ContractVersion;
  [k: string]: unknown;
}
export interface ContractVersion {
  contract: string;
  version: string;
  [k: string]: unknown;
}
export type Owner = {
  addr: string;
} | {
  instantiator: {
    [k: string]: unknown;
  };
};
export interface InstantiateMsg {
  manager?: string | null;
  nft_address: string;
  owner?: Owner | null;
  unstaking_duration?: Duration | null;
  [k: string]: unknown;
}
export type Expiration = {
  at_height: number;
} | {
  at_time: Timestamp;
} | {
  never: {
    [k: string]: unknown;
  };
};
export type Timestamp = Uint64;
export type Uint64 = string;
export interface NftClaimsResponse {
  nft_claims: NftClaim[];
  [k: string]: unknown;
}
export interface NftClaim {
  release_at: Expiration;
  token_id: string;
  [k: string]: unknown;
}
export type QueryMsg = {
  staked_balance_at_height: {
    address: string;
    height?: number | null;
    [k: string]: unknown;
  };
} | {
  total_staked_at_height: {
    height?: number | null;
    [k: string]: unknown;
  };
} | {
  get_config: {
    [k: string]: unknown;
  };
} | {
  nft_claims: {
    address: string;
    [k: string]: unknown;
  };
} | {
  get_hooks: {
    [k: string]: unknown;
  };
} | {
  voting_power_at_height: {
    address: string;
    height?: number | null;
    [k: string]: unknown;
  };
} | {
  total_power_at_height: {
    height?: number | null;
    [k: string]: unknown;
  };
} | {
  info: {
    [k: string]: unknown;
  };
};
export type Uint128 = string;
export interface StakedBalanceAtHeightResponse {
  balance: Uint128;
  height: number;
  [k: string]: unknown;
}
export interface TotalPowerAtHeightResponse {
  height: number;
  power: Uint128;
  [k: string]: unknown;
}
export interface TotalStakedAtHeightResponse {
  height: number;
  total: Uint128;
  [k: string]: unknown;
}
export interface VotingPowerAtHeightResponse {
  height: number;
  power: Uint128;
  [k: string]: unknown;
}
export interface Cw721StakeReadOnlyInterface {
  contractAddress: string;
  stakedBalanceAtHeight: ({
    address,
    height
  }: {
    address: string;
    height?: number;
  }) => Promise<StakedBalanceAtHeightResponse>;
  totalStakedAtHeight: ({
    height
  }: {
    height?: number;
  }) => Promise<TotalStakedAtHeightResponse>;
  getConfig: () => Promise<GetConfigResponse>;
  nftClaims: ({
    address
  }: {
    address: string;
  }) => Promise<NftClaimsResponse>;
  getHooks: () => Promise<GetHooksResponse>;
  votingPowerAtHeight: ({
    address,
    height
  }: {
    address: string;
    height?: number;
  }) => Promise<VotingPowerAtHeightResponse>;
  totalPowerAtHeight: ({
    height
  }: {
    height?: number;
  }) => Promise<TotalPowerAtHeightResponse>;
  info: () => Promise<InfoResponse>;
}
export class Cw721StakeQueryClient implements Cw721StakeReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.stakedBalanceAtHeight = this.stakedBalanceAtHeight.bind(this);
    this.totalStakedAtHeight = this.totalStakedAtHeight.bind(this);
    this.getConfig = this.getConfig.bind(this);
    this.nftClaims = this.nftClaims.bind(this);
    this.getHooks = this.getHooks.bind(this);
    this.votingPowerAtHeight = this.votingPowerAtHeight.bind(this);
    this.totalPowerAtHeight = this.totalPowerAtHeight.bind(this);
    this.info = this.info.bind(this);
  }

  stakedBalanceAtHeight = async ({
    address,
    height
  }: {
    address: string;
    height?: number;
  }): Promise<StakedBalanceAtHeightResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      staked_balance_at_height: {
        address,
        height
      }
    });
  };
  totalStakedAtHeight = async ({
    height
  }: {
    height?: number;
  }): Promise<TotalStakedAtHeightResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      total_staked_at_height: {
        height
      }
    });
  };
  getConfig = async (): Promise<GetConfigResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      get_config: {}
    });
  };
  nftClaims = async ({
    address
  }: {
    address: string;
  }): Promise<NftClaimsResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      nft_claims: {
        address
      }
    });
  };
  getHooks = async (): Promise<GetHooksResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      get_hooks: {}
    });
  };
  votingPowerAtHeight = async ({
    address,
    height
  }: {
    address: string;
    height?: number;
  }): Promise<VotingPowerAtHeightResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      voting_power_at_height: {
        address,
        height
      }
    });
  };
  totalPowerAtHeight = async ({
    height
  }: {
    height?: number;
  }): Promise<TotalPowerAtHeightResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      total_power_at_height: {
        height
      }
    });
  };
  info = async (): Promise<InfoResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      info: {}
    });
  };
}
export interface Cw721StakeInterface extends Cw721StakeReadOnlyInterface {
  contractAddress: string;
  sender: string;
  receiveNft: ({
    msg,
    sender,
    tokenId
  }: {
    msg: string;
    sender: string;
    tokenId: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
  unstake: ({
    tokenIds
  }: {
    tokenIds: string[];
  }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
  claimNfts: (fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
  updateConfig: ({
    duration,
    manager,
    owner
  }: {
    duration?: Duration;
    manager?: string;
    owner?: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
  addHook: ({
    addr
  }: {
    addr: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
  removeHook: ({
    addr
  }: {
    addr: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
}
export class Cw721StakeClient extends Cw721StakeQueryClient implements Cw721StakeInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.receiveNft = this.receiveNft.bind(this);
    this.unstake = this.unstake.bind(this);
    this.claimNfts = this.claimNfts.bind(this);
    this.updateConfig = this.updateConfig.bind(this);
    this.addHook = this.addHook.bind(this);
    this.removeHook = this.removeHook.bind(this);
  }

  receiveNft = async ({
    msg,
    sender,
    tokenId
  }: {
    msg: string;
    sender: string;
    tokenId: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      receive_nft: {
        msg,
        sender,
        token_id: tokenId
      }
    }, fee, memo, funds);
  };
  unstake = async ({
    tokenIds
  }: {
    tokenIds: string[];
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      unstake: {
        token_ids: tokenIds
      }
    }, fee, memo, funds);
  };
  claimNfts = async (fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      claim_nfts: {}
    }, fee, memo, funds);
  };
  updateConfig = async ({
    duration,
    manager,
    owner
  }: {
    duration?: Duration;
    manager?: string;
    owner?: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_config: {
        duration,
        manager,
        owner
      }
    }, fee, memo, funds);
  };
  addHook = async ({
    addr
  }: {
    addr: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      add_hook: {
        addr
      }
    }, fee, memo, funds);
  };
  removeHook = async ({
    addr
  }: {
    addr: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      remove_hook: {
        addr
      }
    }, fee, memo, funds);
  };
}