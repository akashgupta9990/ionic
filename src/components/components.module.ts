import { NgModule } from '@angular/core';
import { AssessmentDetailsComponent } from './assessment-details/assessment-details';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
	declarations: [AssessmentDetailsComponent],
	imports: [
		NgxDatatableModule
	],
	exports: [AssessmentDetailsComponent]
})
export class ComponentsModule {}
