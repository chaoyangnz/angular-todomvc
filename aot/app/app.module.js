import { __decorate } from 'tslib'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { AutofocusModule } from 'angular-autofocus-fix'
import { RouterModule } from '@angular/router'
import { TodoComponent } from './todo.component'
import { TodoService } from './todo.service'
import { AppComponent } from './app.component'
var routes = [
	{ path: '', component: TodoComponent, pathMatch: 'full' },
	{ path: ':filter', component: TodoComponent },
]
var AppModule = /** @class */ (function () {
	function AppModule() {}
	AppModule = __decorate(
		[
			NgModule({
				declarations: [AppComponent, TodoComponent],
				imports: [
					BrowserModule,
					FormsModule,
					AutofocusModule,
					RouterModule.forRoot(routes, { useHash: true }),
				],
				providers: [TodoService],
				bootstrap: [AppComponent],
			}),
		],
		AppModule
	)
	return AppModule
})()
export { AppModule }
//# sourceMappingURL=app.module.js.map
