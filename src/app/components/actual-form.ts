import { Component } from "@angular/core";
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";
import { FormItem } from "../models/formItem";

@Component({
    selector: 'actual-form',
    template: `
        <form [formGroup]="formGroup" (ngSubmit)="submitForm(formGroup.value)">
            <h3>Twoj formularz</h3>

            <div class="form-group" *ngFor="let createdC of createdControls">
                <label for="{{ createdC.name }}">{{ createdC.label }}</label>
                <input formControlName="{{ createdC.name }}"  type="{{ createdC.type }}" class="form-control" id="{{ createdC.name }}">
            </div>

            <div class="form-group">
                <button type="submit" class="btn btn-success">Wyślij</button>
            </div>

        </form>
    `,
    styleUrls: ['./forms.scss']
})

export class ActualForm {
    formGroup: FormGroup;
    createdControls: FormItem[] = [];

    constructor(private fb: FormBuilder){
        this.formGroup = fb.group({});
    }

    submitForm(value){
        console.log('Otrzymany JSON: ', value);
    }

    addControl(createdControl: FormItem){
        this.createdControls.push(createdControl);
        this.formGroup.addControl(createdControl.name, new FormControl());
        this.formGroup.get(createdControl.name).setValue(createdControl.value);
        createdControl = {name: '', label: '', type: '', value: ''};
    }
}