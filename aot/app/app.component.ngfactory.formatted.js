/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */

import {
	createComponentFactory,
	createRendererType2,
	directiveDef,
	elementDef,
	textDef,
	viewDef,
} from '@angular/core/src/view'
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router'
import {
	ChangeDetectorRef,
	ComponentFactoryResolver,
	ViewContainerRef,
} from '@angular/core'
import { AppComponent } from './app.component'

const styles_AppComponent = []
const RenderType_AppComponent = createRendererType2({
	encapsulation: 2,
	styles: styles_AppComponent,
	data: {},
})
export { RenderType_AppComponent }

export function View_AppComponent_0(_l) {
	return viewDef(
		0,
		[
			(_l()(),
			elementDef(
				0,
				16777216,
				null,
				null,
				1,
				'router-outlet',
				[],
				null,
				null,
				null,
				null,
				null
			)),
			directiveDef(
				1,
				212992,
				null,
				0,
				RouterOutlet,
				[
					ChildrenOutletContexts,
					ViewContainerRef,
					ComponentFactoryResolver,
					[8, null],
					ChangeDetectorRef,
				],
				null,
				null
			),
			(_l()(), textDef(-1, null, ['\n'])),
		],
		function (_ck, _v) {
			_ck(_v, 1, 0)
		},
		null
	)
}
export function View_AppComponent_Host_0(_l) {
	return viewDef(
		0,
		[
			(_l()(),
			elementDef(
				0,
				0,
				null,
				null,
				1,
				'app-root',
				[],
				null,
				null,
				null,
				View_AppComponent_0,
				RenderType_AppComponent
			)),
			directiveDef(1, 49152, null, 0, AppComponent, [], null, null),
		],
		null,
		null
	)
}
const AppComponentNgFactory = createComponentFactory(
	'app-root',
	AppComponent,
	View_AppComponent_Host_0,
	{},
	{},
	[]
)
export { AppComponentNgFactory }
//# sourceMappingURL=app.component.ngfactory.js.map