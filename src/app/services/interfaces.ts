export interface Query {
  _id: string;
  domain: string;
  query: string;
  author: {
    username: string;
    roleDetails: {
      company: string,
    };
  };
  imageUrl: string;
  // experience?: number;
  // employees?: number;
  // preference?: string;
  // position?: string;
  // ctc?: number;
  comments?: Answer[];
}

export interface Answer {
  imageUrl: string;
  username: string;
  company: string;
  query: string;
  _id: string;
}
export interface SideNav {
  name: string;
  icon: string;
  link: string;
}

export interface AuthCred {
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface Details {
  username: string;
  mobile: string;
  role: string;
  city: string;
  country: string;
  profilePic?: string;
  professional: {
    company: string,
    domain: string,
    experience?: number,
    employees?: number,
    preference?: string,
    position?: string,
    ctc?: number,
  };
}

export interface User {
  _id: string;
  username: string;
  mobile: string;
  email: string;
  role: string;
  emailVerified: string;
  country: string;
  city: string;
  roleDetails: {
    company: string,
    domain: string,
    position?: string;
    employees?: number,
    experience?: number,
    ctc?: number
  };
  notifications: {
    action: string,
    doerId: string;
    doerName: string;
  };
}
