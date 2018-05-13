import { Component } from '@angular/core';    
import { FormGroup, FormBuilder } from '@angular/forms';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'app-root',
	template: `
		<div class="container-fluid">
			<div class="row">
				<div class="col-lg-6">
					<create-form (addEvent)="actualForm.addControl($event)"></create-form>
				</div>
				<div class="col-lg-6">
					<actual-form #actualForm></actual-form>
				</div>
			</div>
		</div>
	`,
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	

}