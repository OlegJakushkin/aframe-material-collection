import AFRAME from "aframe";
import THREE from "three";
import UI from '../ui';

/**
 * Checkbox A simple component to listen for two click events in quick succession.
 * @namespace aframe-material-collection
 * @component ui-double-click
 * @author Shane Harris
 */
export = AFRAME.registerComponent('ui-double-click', {
    schema:{
        timeout:{type:'int',default:200}
    },
    init() {
        let last_click = 0;
        // Add click event for listening for two clicks within the specified timespan.
        this.el.addEventListener('mousedown',e=>{
            let now = new Date().getTime();
            if(now-last_click<this.data.timeout){
                this.el.emit('dblclick',e);
                // Reset last click
                last_click = 0;
                e.preventDefault();
            }
            last_click = now;
        });
    }
});