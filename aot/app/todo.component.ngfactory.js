/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */

import * as i0 from './todo.component.scss.shim.ngstyle'
import * as i1 from '@angular/core'
import * as i2 from '@angular/forms'
import * as i3 from 'angular-autofocus-fix'
import * as i4 from '@angular/common'
import * as i5 from '@angular/router'
import * as i6 from './todo.component'
import * as i7 from './todo.service'
var styles_TodoComponent = [i0.styles]
var RenderType_TodoComponent = i1.ɵcrt({
	encapsulation: 0,
	styles: styles_TodoComponent,
	data: {},
})
export { RenderType_TodoComponent }
function View_TodoComponent_3(_l) {
	return i1.ɵvid(
		0,
		[
			(_l()(),
			i1.ɵeld(
				0,
				0,
				null,
				null,
				1,
				'label',
				[],
				null,
				[[null, 'dblclick']],
				function (_v, en, $event) {
					var ad = true
					var _co = _v.component
					if ('dblclick' === en) {
						var pd_0 =
							_co.edit(_v.parent.context.$implicit) !== false
						ad = pd_0 && ad
					}
					return ad
				},
				null,
				null
			)),
			(_l()(), i1.ɵted(1, null, ['', ''])),
		],
		null,
		function (_ck, _v) {
			var currVal_0 = _v.parent.context.$implicit.title
			_ck(_v, 1, 0, currVal_0)
		}
	)
}
function View_TodoComponent_4(_l) {
	return i1.ɵvid(
		0,
		[
			(_l()(),
			i1.ɵeld(
				0,
				0,
				null,
				null,
				6,
				'input',
				[
					['autofocus', ''],
					['class', 'edit'],
				],
				[
					[2, 'ng-untouched', null],
					[2, 'ng-touched', null],
					[2, 'ng-pristine', null],
					[2, 'ng-dirty', null],
					[2, 'ng-valid', null],
					[2, 'ng-invalid', null],
					[2, 'ng-pending', null],
				],
				[
					[null, 'ngModelChange'],
					[null, 'keyup.enter'],
					[null, 'keyup.esc'],
					[null, 'input'],
					[null, 'blur'],
					[null, 'compositionstart'],
					[null, 'compositionend'],
				],
				function (_v, en, $event) {
					var ad = true
					var _co = _v.component
					if ('input' === en) {
						var pd_0 =
							i1.ɵnov(_v, 1)._handleInput($event.target.value) !==
							false
						ad = pd_0 && ad
					}
					if ('blur' === en) {
						var pd_1 = i1.ɵnov(_v, 1).onTouched() !== false
						ad = pd_1 && ad
					}
					if ('compositionstart' === en) {
						var pd_2 = i1.ɵnov(_v, 1)._compositionStart() !== false
						ad = pd_2 && ad
					}
					if ('compositionend' === en) {
						var pd_3 =
							i1
								.ɵnov(_v, 1)
								._compositionEnd($event.target.value) !== false
						ad = pd_3 && ad
					}
					if ('ngModelChange' === en) {
						var pd_4 = (_co.currentTodo.title = $event) !== false
						ad = pd_4 && ad
					}
					if ('keyup.enter' === en) {
						var pd_5 = _co.update(_co.currentTodo) !== false
						ad = pd_5 && ad
					}
					if ('keyup.esc' === en) {
						var pd_6 = _co.cancelEdit() !== false
						ad = pd_6 && ad
					}
					return ad
				},
				null,
				null
			)),
			i1.ɵdid(
				1,
				16384,
				null,
				0,
				i2.DefaultValueAccessor,
				[i1.Renderer2, i1.ElementRef, [2, i2.COMPOSITION_BUFFER_MODE]],
				null,
				null
			),
			i1.ɵprd(
				1024,
				null,
				i2.NG_VALUE_ACCESSOR,
				function (p0_0) {
					return [p0_0]
				},
				[i2.DefaultValueAccessor]
			),
			i1.ɵdid(
				3,
				671744,
				null,
				0,
				i2.NgModel,
				[
					[8, null],
					[8, null],
					[8, null],
					[6, i2.NG_VALUE_ACCESSOR],
				],
				{ model: [0, 'model'] },
				{ update: 'ngModelChange' }
			),
			i1.ɵprd(2048, null, i2.NgControl, null, [i2.NgModel]),
			i1.ɵdid(
				5,
				16384,
				null,
				0,
				i2.NgControlStatus,
				[[4, i2.NgControl]],
				null,
				null
			),
			i1.ɵdid(
				6,
				4210688,
				null,
				0,
				i3.AutofocusDirective,
				[i1.ElementRef],
				{ autofocus: [0, 'autofocus'] },
				null
			),
		],
		function (_ck, _v) {
			var _co = _v.component
			var currVal_7 = _co.currentTodo.title
			_ck(_v, 3, 0, currVal_7)
			var currVal_8 = ''
			_ck(_v, 6, 0, currVal_8)
		},
		function (_ck, _v) {
			var currVal_0 = i1.ɵnov(_v, 5).ngClassUntouched
			var currVal_1 = i1.ɵnov(_v, 5).ngClassTouched
			var currVal_2 = i1.ɵnov(_v, 5).ngClassPristine
			var currVal_3 = i1.ɵnov(_v, 5).ngClassDirty
			var currVal_4 = i1.ɵnov(_v, 5).ngClassValid
			var currVal_5 = i1.ɵnov(_v, 5).ngClassInvalid
			var currVal_6 = i1.ɵnov(_v, 5).ngClassPending
			_ck(
				_v,
				0,
				0,
				currVal_0,
				currVal_1,
				currVal_2,
				currVal_3,
				currVal_4,
				currVal_5,
				currVal_6
			)
		}
	)
}
function View_TodoComponent_2(_l) {
	return i1.ɵvid(
		0,
		[
			(_l()(),
			i1.ɵeld(
				0,
				0,
				null,
				null,
				16,
				'li',
				[],
				null,
				null,
				null,
				null,
				null
			)),
			i1.ɵdid(
				1,
				278528,
				null,
				0,
				i4.NgClass,
				[
					i1.IterableDiffers,
					i1.KeyValueDiffers,
					i1.ElementRef,
					i1.Renderer2,
				],
				{ ngClass: [0, 'ngClass'] },
				null
			),
			i1.ɵpod(2, { completed: 0, editing: 1 }),
			(_l()(), i1.ɵted(-1, null, ['\n\t\t\t\t'])),
			(_l()(),
			i1.ɵeld(
				4,
				0,
				null,
				null,
				8,
				'div',
				[['class', 'view']],
				null,
				null,
				null,
				null,
				null
			)),
			(_l()(), i1.ɵted(-1, null, ['\n\t\t\t\t\t'])),
			(_l()(),
			i1.ɵeld(
				6,
				0,
				null,
				null,
				0,
				'input',
				[
					['class', 'toggle'],
					['type', 'checkbox'],
				],
				[[8, 'checked', 0]],
				[[null, 'change']],
				function (_v, en, $event) {
					var ad = true
					var _co = _v.component
					if ('change' === en) {
						var pd_0 = _co.toggle(_v.context.$implicit) !== false
						ad = pd_0 && ad
					}
					return ad
				},
				null,
				null
			)),
			(_l()(), i1.ɵted(-1, null, ['\n\t\t\t\t\t'])),
			(_l()(),
			i1.ɵand(16777216, null, null, 1, null, View_TodoComponent_3)),
			i1.ɵdid(
				9,
				16384,
				null,
				0,
				i4.NgIf,
				[i1.ViewContainerRef, i1.TemplateRef],
				{ ngIf: [0, 'ngIf'] },
				null
			),
			(_l()(), i1.ɵted(-1, null, ['\n\t\t\t\t\t'])),
			(_l()(),
			i1.ɵeld(
				11,
				0,
				null,
				null,
				0,
				'button',
				[['class', 'destroy']],
				null,
				[[null, 'click']],
				function (_v, en, $event) {
					var ad = true
					var _co = _v.component
					if ('click' === en) {
						var pd_0 = _co.delete(_v.context.$implicit) !== false
						ad = pd_0 && ad
					}
					return ad
				},
				null,
				null
			)),
			(_l()(), i1.ɵted(-1, null, ['\n\t\t\t\t'])),
			(_l()(), i1.ɵted(-1, null, ['\n\t\t\t\t'])),
			(_l()(),
			i1.ɵand(16777216, null, null, 1, null, View_TodoComponent_4)),
			i1.ɵdid(
				15,
				16384,
				null,
				0,
				i4.NgIf,
				[i1.ViewContainerRef, i1.TemplateRef],
				{ ngIf: [0, 'ngIf'] },
				null
			),
			(_l()(), i1.ɵted(-1, null, ['\n\t\t\t'])),
		],
		function (_ck, _v) {
			var _co = _v.component
			var currVal_0 = _ck(
				_v,
				2,
				0,
				_v.context.$implicit.completed,
				_v.context.$implicit == _co.currentTodo
			)
			_ck(_v, 1, 0, currVal_0)
			var currVal_2 =
				(_co.currentTodo == null ? null : _co.currentTodo.id) !=
				_v.context.$implicit.id
			_ck(_v, 9, 0, currVal_2)
			var currVal_3 = _co.currentTodo == _v.context.$implicit
			_ck(_v, 15, 0, currVal_3)
		},
		function (_ck, _v) {
			var currVal_1 = _v.context.$implicit.completed
			_ck(_v, 6, 0, currVal_1)
		}
	)
}
function View_TodoComponent_1(_l) {
	return i1.ɵvid(
		0,
		[
			(_l()(),
			i1.ɵeld(
				0,
				0,
				null,
				null,
				12,
				'section',
				[['class', 'main']],
				null,
				null,
				null,
				null,
				null
			)),
			(_l()(), i1.ɵted(-1, null, ['\n\t\t'])),
			(_l()(),
			i1.ɵeld(
				2,
				0,
				[['inputToggleAll', 1]],
				null,
				0,
				'input',
				[
					['class', 'toggle-all'],
					['id', 'toggle-all'],
					['type', 'checkbox'],
				],
				[[8, 'checked', 0]],
				[[null, 'click']],
				function (_v, en, $event) {
					var ad = true
					var _co = _v.component
					if ('click' === en) {
						var pd_0 =
							_co.toggleAll(i1.ɵnov(_v, 2).checked) !== false
						ad = pd_0 && ad
					}
					return ad
				},
				null,
				null
			)),
			(_l()(), i1.ɵted(-1, null, ['\n\t\t'])),
			(_l()(),
			i1.ɵeld(
				4,
				0,
				null,
				null,
				1,
				'label',
				[['for', 'toggle-all']],
				null,
				null,
				null,
				null,
				null
			)),
			(_l()(), i1.ɵted(-1, null, ['Mark all as complete'])),
			(_l()(), i1.ɵted(-1, null, ['\n\t\t'])),
			(_l()(),
			i1.ɵeld(
				7,
				0,
				null,
				null,
				4,
				'ul',
				[['class', 'todo-list']],
				null,
				null,
				null,
				null,
				null
			)),
			(_l()(), i1.ɵted(-1, null, ['\n\t\t\t'])),
			(_l()(),
			i1.ɵand(16777216, null, null, 1, null, View_TodoComponent_2)),
			i1.ɵdid(
				10,
				278528,
				null,
				0,
				i4.NgForOf,
				[i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers],
				{ ngForOf: [0, 'ngForOf'] },
				null
			),
			(_l()(), i1.ɵted(-1, null, ['\n\t\t'])),
			(_l()(), i1.ɵted(-1, null, ['\n\t'])),
		],
		function (_ck, _v) {
			var _co = _v.component
			var currVal_1 = _co.filteredTodos
			_ck(_v, 10, 0, currVal_1)
		},
		function (_ck, _v) {
			var _co = _v.component
			var currVal_0 = _co.allCompleted
			_ck(_v, 2, 0, currVal_0)
		}
	)
}
function View_TodoComponent_6(_l) {
	return i1.ɵvid(
		0,
		[
			(_l()(),
			i1.ɵeld(
				0,
				0,
				null,
				null,
				1,
				'button',
				[['class', 'clear-completed']],
				null,
				[[null, 'click']],
				function (_v, en, $event) {
					var ad = true
					var _co = _v.component
					if ('click' === en) {
						var pd_0 = _co.clearCompleted() !== false
						ad = pd_0 && ad
					}
					return ad
				},
				null,
				null
			)),
			(_l()(), i1.ɵted(-1, null, ['\n\t\t\tClear completed\n\t\t'])),
		],
		null,
		null
	)
}
function View_TodoComponent_5(_l) {
	return i1.ɵvid(
		0,
		[
			(_l()(),
			i1.ɵeld(
				0,
				0,
				null,
				null,
				42,
				'footer',
				[['class', 'footer']],
				null,
				null,
				null,
				null,
				null
			)),
			(_l()(), i1.ɵted(-1, null, ['\n\t\t'])),
			(_l()(),
			i1.ɵeld(
				2,
				0,
				null,
				null,
				3,
				'span',
				[['class', 'todo-count']],
				null,
				null,
				null,
				null,
				null
			)),
			(_l()(),
			i1.ɵeld(
				3,
				0,
				null,
				null,
				1,
				'strong',
				[],
				null,
				null,
				null,
				null,
				null
			)),
			(_l()(), i1.ɵted(4, null, ['', ''])),
			(_l()(), i1.ɵted(5, null, [' item', '\n\t\t\tleft'])),
			(_l()(), i1.ɵted(-1, null, ['\n\n\t\t'])),
			(_l()(),
			i1.ɵeld(
				7,
				0,
				null,
				null,
				31,
				'ul',
				[['class', 'filters']],
				null,
				null,
				null,
				null,
				null
			)),
			(_l()(), i1.ɵted(-1, null, ['\n\t\t\t'])),
			(_l()(),
			i1.ɵeld(
				9,
				0,
				null,
				null,
				8,
				'li',
				[],
				null,
				null,
				null,
				null,
				null
			)),
			(_l()(), i1.ɵted(-1, null, ['\n\t\t\t\t'])),
			(_l()(),
			i1.ɵeld(
				11,
				0,
				null,
				null,
				5,
				'a',
				[],
				[
					[1, 'target', 0],
					[8, 'href', 4],
				],
				[[null, 'click']],
				function (_v, en, $event) {
					var ad = true
					if ('click' === en) {
						var pd_0 =
							i1
								.ɵnov(_v, 14)
								.onClick(
									$event.button,
									$event.ctrlKey,
									$event.metaKey,
									$event.shiftKey
								) !== false
						ad = pd_0 && ad
					}
					return ad
				},
				null,
				null
			)),
			i1.ɵdid(
				12,
				278528,
				null,
				0,
				i4.NgClass,
				[
					i1.IterableDiffers,
					i1.KeyValueDiffers,
					i1.ElementRef,
					i1.Renderer2,
				],
				{ ngClass: [0, 'ngClass'] },
				null
			),
			i1.ɵpod(13, { selected: 0 }),
			i1.ɵdid(
				14,
				671744,
				null,
				0,
				i5.RouterLinkWithHref,
				[i5.Router, i5.ActivatedRoute, i4.LocationStrategy],
				{ routerLink: [0, 'routerLink'] },
				null
			),
			i1.ɵpad(15, 1),
			(_l()(), i1.ɵted(-1, null, ['All'])),
			(_l()(), i1.ɵted(-1, null, ['\n\t\t\t'])),
			(_l()(), i1.ɵted(-1, null, ['\n\t\t\t'])),
			(_l()(),
			i1.ɵeld(
				19,
				0,
				null,
				null,
				8,
				'li',
				[],
				null,
				null,
				null,
				null,
				null
			)),
			(_l()(), i1.ɵted(-1, null, ['\n\t\t\t\t'])),
			(_l()(),
			i1.ɵeld(
				21,
				0,
				null,
				null,
				5,
				'a',
				[],
				[
					[1, 'target', 0],
					[8, 'href', 4],
				],
				[[null, 'click']],
				function (_v, en, $event) {
					var ad = true
					if ('click' === en) {
						var pd_0 =
							i1
								.ɵnov(_v, 24)
								.onClick(
									$event.button,
									$event.ctrlKey,
									$event.metaKey,
									$event.shiftKey
								) !== false
						ad = pd_0 && ad
					}
					return ad
				},
				null,
				null
			)),
			i1.ɵdid(
				22,
				278528,
				null,
				0,
				i4.NgClass,
				[
					i1.IterableDiffers,
					i1.KeyValueDiffers,
					i1.ElementRef,
					i1.Renderer2,
				],
				{ ngClass: [0, 'ngClass'] },
				null
			),
			i1.ɵpod(23, { selected: 0 }),
			i1.ɵdid(
				24,
				671744,
				null,
				0,
				i5.RouterLinkWithHref,
				[i5.Router, i5.ActivatedRoute, i4.LocationStrategy],
				{ routerLink: [0, 'routerLink'] },
				null
			),
			i1.ɵpad(25, 2),
			(_l()(), i1.ɵted(-1, null, ['Active'])),
			(_l()(), i1.ɵted(-1, null, ['\n\t\t\t'])),
			(_l()(), i1.ɵted(-1, null, ['\n\t\t\t'])),
			(_l()(),
			i1.ɵeld(
				29,
				0,
				null,
				null,
				8,
				'li',
				[],
				null,
				null,
				null,
				null,
				null
			)),
			(_l()(), i1.ɵted(-1, null, ['\n\t\t\t\t'])),
			(_l()(),
			i1.ɵeld(
				31,
				0,
				null,
				null,
				5,
				'a',
				[],
				[
					[1, 'target', 0],
					[8, 'href', 4],
				],
				[[null, 'click']],
				function (_v, en, $event) {
					var ad = true
					if ('click' === en) {
						var pd_0 =
							i1
								.ɵnov(_v, 34)
								.onClick(
									$event.button,
									$event.ctrlKey,
									$event.metaKey,
									$event.shiftKey
								) !== false
						ad = pd_0 && ad
					}
					return ad
				},
				null,
				null
			)),
			i1.ɵdid(
				32,
				278528,
				null,
				0,
				i4.NgClass,
				[
					i1.IterableDiffers,
					i1.KeyValueDiffers,
					i1.ElementRef,
					i1.Renderer2,
				],
				{ ngClass: [0, 'ngClass'] },
				null
			),
			i1.ɵpod(33, { selected: 0 }),
			i1.ɵdid(
				34,
				671744,
				null,
				0,
				i5.RouterLinkWithHref,
				[i5.Router, i5.ActivatedRoute, i4.LocationStrategy],
				{ routerLink: [0, 'routerLink'] },
				null
			),
			i1.ɵpad(35, 2),
			(_l()(), i1.ɵted(-1, null, ['Completed'])),
			(_l()(), i1.ɵted(-1, null, ['\n\t\t\t'])),
			(_l()(), i1.ɵted(-1, null, ['\n\t\t'])),
			(_l()(), i1.ɵted(-1, null, ['\n\n\t\t'])),
			(_l()(),
			i1.ɵand(16777216, null, null, 1, null, View_TodoComponent_6)),
			i1.ɵdid(
				41,
				16384,
				null,
				0,
				i4.NgIf,
				[i1.ViewContainerRef, i1.TemplateRef],
				{ ngIf: [0, 'ngIf'] },
				null
			),
			(_l()(), i1.ɵted(-1, null, ['\n\t'])),
		],
		function (_ck, _v) {
			var _co = _v.component
			var currVal_4 = _ck(_v, 13, 0, _co.filter == 'SHOW_ALL')
			_ck(_v, 12, 0, currVal_4)
			var currVal_5 = _ck(_v, 15, 0, '')
			_ck(_v, 14, 0, currVal_5)
			var currVal_8 = _ck(_v, 23, 0, _co.filter == 'SHOW_ACTIVE')
			_ck(_v, 22, 0, currVal_8)
			var currVal_9 = _ck(_v, 25, 0, '', 'active')
			_ck(_v, 24, 0, currVal_9)
			var currVal_12 = _ck(_v, 33, 0, _co.filter == 'SHOW_COMPLETED')
			_ck(_v, 32, 0, currVal_12)
			var currVal_13 = _ck(_v, 35, 0, '', 'completed')
			_ck(_v, 34, 0, currVal_13)
			var currVal_14 = _co.completed > 0
			_ck(_v, 41, 0, currVal_14)
		},
		function (_ck, _v) {
			var _co = _v.component
			var currVal_0 = _co.remaining
			_ck(_v, 4, 0, currVal_0)
			var currVal_1 = _co.remaining !== 1 ? 's' : ''
			_ck(_v, 5, 0, currVal_1)
			var currVal_2 = i1.ɵnov(_v, 14).target
			var currVal_3 = i1.ɵnov(_v, 14).href
			_ck(_v, 11, 0, currVal_2, currVal_3)
			var currVal_6 = i1.ɵnov(_v, 24).target
			var currVal_7 = i1.ɵnov(_v, 24).href
			_ck(_v, 21, 0, currVal_6, currVal_7)
			var currVal_10 = i1.ɵnov(_v, 34).target
			var currVal_11 = i1.ɵnov(_v, 34).href
			_ck(_v, 31, 0, currVal_10, currVal_11)
		}
	)
}
export function View_TodoComponent_0(_l) {
	return i1.ɵvid(
		2,
		[
			(_l()(),
			i1.ɵeld(
				0,
				0,
				null,
				null,
				21,
				'section',
				[['class', 'todoapp']],
				null,
				null,
				null,
				null,
				null
			)),
			(_l()(), i1.ɵted(-1, null, ['\n\t'])),
			(_l()(),
			i1.ɵeld(
				2,
				0,
				null,
				null,
				12,
				'header',
				[['class', 'header']],
				null,
				null,
				null,
				null,
				null
			)),
			(_l()(), i1.ɵted(-1, null, ['\n\t\t'])),
			(_l()(),
			i1.ɵeld(
				4,
				0,
				null,
				null,
				1,
				'h1',
				[],
				null,
				null,
				null,
				null,
				null
			)),
			(_l()(), i1.ɵted(-1, null, ['todos'])),
			(_l()(), i1.ɵted(-1, null, ['\n\t\t'])),
			(_l()(),
			i1.ɵeld(
				7,
				0,
				[['todo', 1]],
				null,
				6,
				'input',
				[
					['autofocus', ''],
					['class', 'new-todo'],
					['placeholder', 'What needs to be done?'],
				],
				[
					[2, 'ng-untouched', null],
					[2, 'ng-touched', null],
					[2, 'ng-pristine', null],
					[2, 'ng-dirty', null],
					[2, 'ng-valid', null],
					[2, 'ng-invalid', null],
					[2, 'ng-pending', null],
				],
				[
					[null, 'ngModelChange'],
					[null, 'keyup.enter'],
					[null, 'input'],
					[null, 'blur'],
					[null, 'compositionstart'],
					[null, 'compositionend'],
				],
				function (_v, en, $event) {
					var ad = true
					var _co = _v.component
					if ('input' === en) {
						var pd_0 =
							i1.ɵnov(_v, 8)._handleInput($event.target.value) !==
							false
						ad = pd_0 && ad
					}
					if ('blur' === en) {
						var pd_1 = i1.ɵnov(_v, 8).onTouched() !== false
						ad = pd_1 && ad
					}
					if ('compositionstart' === en) {
						var pd_2 = i1.ɵnov(_v, 8)._compositionStart() !== false
						ad = pd_2 && ad
					}
					if ('compositionend' === en) {
						var pd_3 =
							i1
								.ɵnov(_v, 8)
								._compositionEnd($event.target.value) !== false
						ad = pd_3 && ad
					}
					if ('ngModelChange' === en) {
						var pd_4 = (_co.newTodo = $event) !== false
						ad = pd_4 && ad
					}
					if ('keyup.enter' === en) {
						var pd_5 = _co.create(i1.ɵnov(_v, 7).value) !== false
						ad = pd_5 && ad
					}
					return ad
				},
				null,
				null
			)),
			i1.ɵdid(
				8,
				16384,
				null,
				0,
				i2.DefaultValueAccessor,
				[i1.Renderer2, i1.ElementRef, [2, i2.COMPOSITION_BUFFER_MODE]],
				null,
				null
			),
			i1.ɵprd(
				1024,
				null,
				i2.NG_VALUE_ACCESSOR,
				function (p0_0) {
					return [p0_0]
				},
				[i2.DefaultValueAccessor]
			),
			i1.ɵdid(
				10,
				671744,
				null,
				0,
				i2.NgModel,
				[
					[8, null],
					[8, null],
					[8, null],
					[6, i2.NG_VALUE_ACCESSOR],
				],
				{ model: [0, 'model'] },
				{ update: 'ngModelChange' }
			),
			i1.ɵprd(2048, null, i2.NgControl, null, [i2.NgModel]),
			i1.ɵdid(
				12,
				16384,
				null,
				0,
				i2.NgControlStatus,
				[[4, i2.NgControl]],
				null,
				null
			),
			i1.ɵdid(
				13,
				4210688,
				null,
				0,
				i3.AutofocusDirective,
				[i1.ElementRef],
				{ autofocus: [0, 'autofocus'] },
				null
			),
			(_l()(), i1.ɵted(-1, null, ['\n\t'])),
			(_l()(), i1.ɵted(-1, null, ['\n\t'])),
			(_l()(),
			i1.ɵand(16777216, null, null, 1, null, View_TodoComponent_1)),
			i1.ɵdid(
				17,
				16384,
				null,
				0,
				i4.NgIf,
				[i1.ViewContainerRef, i1.TemplateRef],
				{ ngIf: [0, 'ngIf'] },
				null
			),
			(_l()(), i1.ɵted(-1, null, ['\n\t'])),
			(_l()(),
			i1.ɵand(16777216, null, null, 1, null, View_TodoComponent_5)),
			i1.ɵdid(
				20,
				16384,
				null,
				0,
				i4.NgIf,
				[i1.ViewContainerRef, i1.TemplateRef],
				{ ngIf: [0, 'ngIf'] },
				null
			),
			(_l()(), i1.ɵted(-1, null, ['\n'])),
			(_l()(), i1.ɵted(-1, null, ['\n'])),
			(_l()(),
			i1.ɵeld(
				23,
				0,
				null,
				null,
				9,
				'footer',
				[['class', 'info']],
				null,
				null,
				null,
				null,
				null
			)),
			(_l()(), i1.ɵted(-1, null, ['\n\t'])),
			(_l()(),
			i1.ɵeld(
				25,
				0,
				null,
				null,
				1,
				'p',
				[],
				null,
				null,
				null,
				null,
				null
			)),
			(_l()(), i1.ɵted(-1, null, ['Double-click to edit a todo'])),
			(_l()(), i1.ɵted(-1, null, ['\n\t'])),
			(_l()(),
			i1.ɵeld(
				28,
				0,
				null,
				null,
				3,
				'p',
				[],
				null,
				null,
				null,
				null,
				null
			)),
			(_l()(), i1.ɵted(-1, null, ['Based on '])),
			(_l()(),
			i1.ɵeld(
				30,
				0,
				null,
				null,
				1,
				'a',
				[['href', 'http://todomvc.com']],
				null,
				null,
				null,
				null,
				null
			)),
			(_l()(), i1.ɵted(-1, null, ['TodoMVC'])),
			(_l()(), i1.ɵted(-1, null, ['\n'])),
			(_l()(), i1.ɵted(-1, null, ['\n'])),
		],
		function (_ck, _v) {
			var _co = _v.component
			var currVal_7 = _co.newTodo
			_ck(_v, 10, 0, currVal_7)
			var currVal_8 = ''
			_ck(_v, 13, 0, currVal_8)
			var currVal_9 = _co.todos.length > 0
			_ck(_v, 17, 0, currVal_9)
			var currVal_10 = _co.todos.length > 0
			_ck(_v, 20, 0, currVal_10)
		},
		function (_ck, _v) {
			var currVal_0 = i1.ɵnov(_v, 12).ngClassUntouched
			var currVal_1 = i1.ɵnov(_v, 12).ngClassTouched
			var currVal_2 = i1.ɵnov(_v, 12).ngClassPristine
			var currVal_3 = i1.ɵnov(_v, 12).ngClassDirty
			var currVal_4 = i1.ɵnov(_v, 12).ngClassValid
			var currVal_5 = i1.ɵnov(_v, 12).ngClassInvalid
			var currVal_6 = i1.ɵnov(_v, 12).ngClassPending
			_ck(
				_v,
				7,
				0,
				currVal_0,
				currVal_1,
				currVal_2,
				currVal_3,
				currVal_4,
				currVal_5,
				currVal_6
			)
		}
	)
}
export function View_TodoComponent_Host_0(_l) {
	return i1.ɵvid(
		0,
		[
			(_l()(),
			i1.ɵeld(
				0,
				0,
				null,
				null,
				1,
				'app-todo',
				[],
				null,
				null,
				null,
				View_TodoComponent_0,
				RenderType_TodoComponent
			)),
			i1.ɵdid(
				1,
				507904,
				null,
				0,
				i6.TodoComponent,
				[i7.TodoService, i5.ActivatedRoute],
				null,
				null
			),
		],
		function (_ck, _v) {
			_ck(_v, 1, 0)
		},
		null
	)
}
var TodoComponentNgFactory = i1.ɵccf(
	'app-todo',
	i6.TodoComponent,
	View_TodoComponent_Host_0,
	{},
	{},
	[]
)
export { TodoComponentNgFactory }
//# sourceMappingURL=todo.component.ngfactory.js.map
