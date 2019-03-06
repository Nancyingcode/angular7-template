export interface UserInfo {
    admin: {
      id: number;
      type: number;
      phone: string;
    };
    token: string;
}

export interface TokenInfo {
    userId: number;
    token: string;
}
