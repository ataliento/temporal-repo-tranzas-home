export interface IToken {
  token: string;
  expiration: number;
  refreshToken: {
    token: string;
    expiration: number;
  };
}

export interface IPhone {
  id: number;
  codigoArea: string;
  numero: string;
}

export interface IAddress {
  id: number;
  calle: string;
  numero: string;
  piso: string;
  unidad: string;
  latitud: string;
  longitud: string;
  provincia: string;
  localidad: string;
  codigoPostal: string;
}
export interface Identity {
  id: number;
  nombre: string;
  valor: string;
}

export interface IUser {
  id: string;
  email: string;
  nombre: string;
  apellido: string;
  idExterno: number;
  telefonos: IPhone[];
  direcciones: IAddress[];
  emprendimiento: unknown[];
  tipoDeUsuario: string | null;
  identificador: Identity;
}

export interface ILoginResponse {
  token?: IToken;
  usuario?: IUser;
  success?: boolean;
  message: string | null;
}

export interface IAuth {
  token: IToken;
  usuario: IUser;
}
