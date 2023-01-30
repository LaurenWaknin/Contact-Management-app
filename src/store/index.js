import { createStore } from "vuex";

export default createStore({
  state: {
    //contact "database"
    contactList: [
      {
        id: 1,
        image: "/assets/john-smith.jpg",
        fullname: "John Smith",
        title: "Graphics designer",
        latitude: "",
        longitute: "",
        company: "Twitter, Inc.",
        address1: "795 Folsom Ave, Suite 660",
        address2: "San Francisco CA 94107",
        phonenumber: "(123)456-7890",
        readOnly: true,
      },
      {
        id: 2,
        image: "/assets/alex-jonathan.jpg",
        fullname: "Alex Johnatan",
        title: "CEO",
        latitude: "",
        longitute: "",
        company: "Twitter, Inc.",
        address1: "795 Folsom Ave, Suite 660",
        address2: "San Francisco CA 94107",
        phonenumber: "(123)456-7890",
        readOnly: true,
      },
      {
        id: 3,
        image: "/assets/monica-smith.jpg",
        fullname: "Monica Smith",
        title: "Marketing manager",
        latitude: "",
        longitute: "",
        company: "Twitter, Inc.",
        address1: "795 Folsom Ave, Suite 660",
        address2: "San Francisco CA 94107",
        phonenumber: "(123)456-7890",
        readOnly: true,
      },
      {
        id: "4",
        image: "/assets/michael-zimber.jpg",
        fullname: "Michael Zimber",
        title: "Sales manager",
        latitude: "",
        longitute: "",
        company: "Twitter, Inc.",
        address1: "795 Folsom Ave, Suite 660",
        address2: "San Francisco CA 94107",
        phonenumber: "(123)456-7890",
        readOnly: true,
      },
      {
        id: 5,
        image: "/assets/sandra-smith.jpg",
        fullname: "Sandra Smith",
        title: "Graphics designer",
        latitude: "",
        longitute: "",
        company: "Twitter, Inc.",
        address1: "795 Folsom Ave, Suite 660",
        address2: "San Francisco CA 94107",
        phonenumber: "(123)456-7890",
        readOnly: true,
      },
      {
        id: 6,
        image: "/assets/janeth-carton.jpg",
        fullname: "Janet Carton",
        title: "Graphics designer",
        latitude: "",
        longitute: "",
        company: "Twitter, Inc.",
        address1: "795 Folsom Ave, Suite 660",
        address2: "San Francisco CA 94107",
        phonenumber: "(123)456-7890",
        readOnly: true,
      },
      {
        id: 7,
        image: "/assets/alex-jonathan.jpg",
        fullname: "Alex Johnatan",
        title: "CEO",
        latitude: "",
        longitute: "",
        company: "Twitter, Inc.",
        address1: "795 Folsom Ave, Suite 660",
        address2: "San Francisco CA 94107",
        phonenumber: "(123)456-7890",
        readOnly: true,
      },
      {
        id: 8,
        image: "/assets/john-smith.jpg",
        fullname: "John Smith",
        title: "Graphics designer",
        latitude: "",
        longitute: "",
        company: "Twitter, Inc.",
        address1: "795 Folsom Ave, Suite 660",
        address2: "San Francisco CA 94107",
        phonenumber: "(123)456-7890",
        readOnly: true,
      },
    ],
    display: false,
  },

  getters: {
    //get contact list
    getContactList(state) {
      return state.contactList;
    },
    //get display for add contact card
    getDisplay(state) {
      return state.display;
    },
  },
  mutations: {
    ADD_CONTACT_TO_LIST(state, contact) {
      state.contactList.push(contact);
    },
    SET_DISPLAY(state, display) {
      state.display = display;
    },
    DELETE_CONTACT_FROM_LIST(state, index) {
      state.contactList.splice(index, 1);
    },
    SET_READ_ONLY(state, index) {
      console.log("set read only", state.contactList[index].readOnly);
      state.contactList[index].readOnly = false;
    },
    EDIT_CONTACT_TO_LIST(state, args) {
      console.log("EDIT_CONTACT_TO_LIST", state.contactList[args.index]);

      state.contactList[args.index] = args.contact;
      // state.contactList = { ...state.contactList };
    },
  },
  actions: {
    //add contact to app (list)
    addContactToList: ({ commit }, contact) => {
      commit("ADD_CONTACT_TO_LIST", contact);
    },
    setDisplay: ({ commit }, display) => {
      // console.log('setDisplay', display);
      commit("SET_DISPLAY", display);
    },
    //delete contact from app (list)
    deleteFromContactList: ({ commit }, index) => {
      commit("DELETE_CONTACT_FROM_LIST", index);
    },
    //sets the input fields to readonly - true / false
    setReadOnly: ({ commit }, index) => {
      commit("SET_READ_ONLY", index);
    },
    //to edit contact card
    editContactToList: ({ commit }, args) => {
      console.log("editContactToList", args.index);
      commit("EDIT_CONTACT_TO_LIST", args);
    },
  },
  modules: {},
});
