import Vue from "vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faCalendarAlt, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";

export default function init() {
    Vue.component('font-awesome-icon', FontAwesomeIcon);
    library.add(faMapMarkerAlt, faCalendarAlt);
}


