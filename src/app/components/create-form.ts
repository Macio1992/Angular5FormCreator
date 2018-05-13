import { Component, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: 'create-form',
    template: `

    <h3 class="header-h3">Wybierz rodzaj pola do formularza</h3>
    <div class="form-check form-check-inline" *ngFor="let type of inputTypes">
        <input class="form-check-input" type="radio" name="inputType" id="{{ type.type }}" value="{{ type.type }}" [(ngModel)]="inputType">
        <label class="form-check-label" for="{{ type.type }}">{{ type.value }}</label>
    </div>

    <div [ngSwitch]="inputType">
        <div *ngSwitchCase="'textOrNumber'">
            <form [formGroup]="createForm" (ngSubmit)="addEvent.emit(createForm.value)" >
                <div class="form-group">
                    <label for="name">Podaj nazwe pola:</label>
                    <input type="text" class="form-control" id="name" aria-describedby="name" placeholder="Wpisz nazwę pola" formControlName="name">
                    <small id="name" class="form-text text-muted">Podaj nazwę jak ma się nazywać pole w obiekcie</small>
                </div>

                <div class="form-group">
                    <label for="label">Podaj wartość labela:</label>
                    <input type="text" class="form-control" id="label" aria-describedby="label" placeholder="Wpisz nazwę labela" formControlName="label">
                    <small id="name" class="form-text text-muted">Podaj wartość jaka ma być wyświetlona nad inputem</small>
                </div>

                <div class="form-group">
                    <label>Wybierz typ inputa</label>
                </div>

                <div class="form-group">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="type" id="typeText" value="text" formControlName="type">
                        <label class="form-check-label" for="typeText">text</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="type" id="typeNumber" value="number" formControlName="type">
                        <label class="form-check-label" for="typeNumber">number</label>
                    </div>
                </div>

                <div class="form-group" *ngIf="createForm.get('type')">
                    <label for="default">Podaj wartość początkową:</label>
                    <input formControlName="value" *ngIf="createForm.get('type').value === 'text'" type="text" class="form-control" id="default" aria-describedby="default" placeholder="Podaj wartość początkową">
                    <input formControlName="value" *ngIf="createForm.get('type').value === 'number'" type="number" class="form-control" id="default" aria-describedby="default" placeholder="Podaj wartość początkową">
                    <small id="default" class="form-text text-muted">* pole nieobowiązkowe. Jak nie wpiszesz to pole w formularzu zostanie puste</small>
                </div>
                
                <div class="form-group">
                    <button [disabled]="!createForm.valid" type="submit" class="btn btn-primary">Dodaj</button>
                </div>
                
            </form>
        </div>
        <div *ngSwitchCase="'checkbox'">
            <p>checkbox TODO</p>
        </div>
        <div *ngSwitchCase="'radio'">
            <p>radio TODO</p>
        </div>
    </div>
        
    `,
    styleUrls: ['./forms.scss']
})

export class CreateForm {

    @Output() addEvent = new EventEmitter<{}>();
    inputType: string;
    
    createForm: FormGroup;
    inputTypes: {type: string, value: string}[] = [
        {type: "textOrNumber", value: "Input typu TEXT lub NUMBER"}, 
        {type: "checkbox", value: "Input CHECKBOX"},
        {type: "radio", value:  "Input RADIO"}];

    constructor(private fb: FormBuilder){
        this.createForm = fb.group({
            "name": ['', Validators.compose([Validators.required])],
            "label": ['', Validators.compose([Validators.required])],
            "type": ['', Validators.compose([Validators.required])],
            "value": ['']
        });
    }
}