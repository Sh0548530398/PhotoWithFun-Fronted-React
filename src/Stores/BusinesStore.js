import { action, makeObservable, observable } from 'mobx';


class BusinesStore {

    isEdit = false;
    busines = {
        name: "להצטלם בכיף",
        address: "נועם אלימלך 11 בני ברק",
        phone: "0548530398",
        owner: "שושי אליהו",
        logo: "/src/Components/Busines/logo.jpg",
        description: "תמונות מושלמות לילדים מתוקים",
    };
    constructor() {
        makeObservable(this, {
            busines: observable,
            isEdit: observable,
            editDeataild: action,
            markIsEdit: action,
            setBusines: action,
        })
    }

    setBusines = (busines) => {
        this.busines = busines;
    }
    editDeataild(newB) {
        this.busines = newB;

    }
    markIsEdit() {
        this.isEdit = !this.isEdit;
    }
}
export default new BusinesStore();