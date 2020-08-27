import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';

const view = (state, {updateState}) => {
	return (
		<div className="flex-center"><h1>Hello World!</h1></div>
	);
};

createCustomElement('x-526323-hello-world', {
	renderer: {type: snabbdom},
	view,
	styles
});
