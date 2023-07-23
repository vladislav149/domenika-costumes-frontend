export interface Place {
  _id: string
  title: string
  costumes: object[]
  requisites: object[]
}

export interface Employee {
  fName: string
  lName: string
  numberPhone: string
  role: string
  costumes: string[]
  requisites: string[]
}

export interface Attribute<T> {
  _id: string
  title: string
  description: string
  img: string
  employee: T
  createdAt: Date
  lastChangedAt: Date
}

export interface AttributeWithPlace<T> extends Attribute<T> {
  place: Place
}

export interface AttributeWithPlaceString<T> extends Attribute<T> {
  place: string
}

export interface AttrComputed extends Attribute<Employee> {
  lastChangedDate: string
  dateCreate?: string
}
