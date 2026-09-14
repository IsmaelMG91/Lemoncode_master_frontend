export type Menu = {
  id: string
  title: string
  type : MenuType
}

export type Day = {
  id: string
  name: string
  menu : Menu[]
}

export type MenuType = "breakfast" | "lunch" | "dinner"
