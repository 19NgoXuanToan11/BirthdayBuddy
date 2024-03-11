export interface userInfo {
    id: number;
    roleInfo: {
      roleId: number;
      roleName: string;
    };
    fullname: string;
  }
  
  export interface partyInfo {
    partyId: number;
    partyName: string;
  }
  
  export interface restaurantInfo {
    restaurantId: number;
    restaurantName: string;
    restaurantType: string;
  }
  
  export interface partyPackagesInfo {
    partyPackageId: number;
    description: string;
    price: number;
    status: string;
    hostId: number;
  }
  
  export interface userModelRespone {
    id:number;
    RoleModelResponse: {roleId:number, roleName:string};
      fullname: string;
  }
  
  export interface Party {
    partyId: number;
    availableDate: Date;
    bookingDate: Date;
    description: string;
    numberOfGuest: number;
    userinfo: userInfo | null;
    partyTheme: string;
    price: number;
    startDate: Date;
    status: string;
    hostId: number;
    restaurantId: number;
    slotId: number;
  }
  
  export interface CartElement {
    Party: Party,
    EnrollDate: Date,
  }
