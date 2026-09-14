import { ref } from "vue";
import type { Day, Menu, MenuType } from "@/types";
import { defineStore } from "pinia";

const weekDays: Day[] = [
  { id: "monday", name: "Lunes", menu: []},
  { id: "tuesday", name: "Martes", menu: []},
  { id: "wednesday", name: "Miércoles", menu: []},
  { id: "thursday", name: "Jueves", menu: []},
  { id: "friday", name: "Viernes", menu: []},
  { id: "saturday", name: "Sábado", menu: []},
  { id: "sunday", name: "Domingo", menu: []},
]

export const useDaysStore = defineStore('days', () => {
  const days = ref(weekDays)
  //Busca un elemento de la lista según su ID
  const fetchDayItem = (dayId: string) => {
    return days.value.find((day) => day.id === dayId)
  }
  
  const createMenu = (dayId: string, name:string, menuType: MenuType) => {

    const newMenu: Menu = {
      id: crypto.randomUUID(),
      title : name,
      type: menuType
    }

    const daySelected = fetchDayItem(dayId)
    daySelected?.menu.push(newMenu)

  }

  const deleteMenu = (dayId: string, id: string) => {
    const daySelected = fetchDayItem(dayId)

    if (!daySelected) return
    const elementToDelete = daySelected?.menu.findIndex((menu) => menu.id === id)

    daySelected?.menu.splice(elementToDelete, 1)
  }

  return {
    days,
    fetchDayItem,
    createMenu,
    deleteMenu
  }
})
