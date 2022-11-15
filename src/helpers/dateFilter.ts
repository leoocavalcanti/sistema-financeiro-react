import { Item } from "../types/item";

export const getCurrentMonth = () => {

    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth() + 1}`
}

export const filterListByMonth = (list: Item[], date: string): Item[] => {

    let newList: Item[] = [];
    let [year, month] = date.split("-");
    for(let i in list){

        if(list[i].date.getFullYear() === parseInt(year)
        && list[i].date.getMonth()  === parseInt(month)){

            newList.push(list[i]);
        }
    }
    return newList
}

export const formatDate = (date: Date): string => {

    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();

    return `${day < 10 ? "0"+day : day}/${month < 10 ? "0"+month : month}/${year}`

}

export const formatCurrentMonth = (currentMonth: string): string | null => {

    let [year, month] = currentMonth.split("-");
    
    if(parseInt(month) === 1) return `Janeiro de ${year}`
    else if(parseInt(month) === 2) return `Fevereiro de ${year}`
    else if(parseInt(month) === 3) return `Março de ${year}`
    else if(parseInt(month) === 4) return `Abril de ${year}`
    else if(parseInt(month) === 5) return `Maio de ${year}`
    else if(parseInt(month) === 6) return `Junho de ${year}`
    else if(parseInt(month) === 7) return `Julho de ${year}`
    else if(parseInt(month) === 8) return `Agosto de ${year}`
    else if(parseInt(month) === 9) return `Setembro de ${year}`
    else if(parseInt(month) === 10) return `Outubro de ${year}`
    else if(parseInt(month) === 11) return `Novembro de ${year}`
    else if(parseInt(month) === 12) return `Dezembro de ${year}`
    else return null
    

}

