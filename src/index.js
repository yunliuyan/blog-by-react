import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory,IndexRoute} from 'react-router';
import App from './components/App';
import Index from './components/Index';
import category from './components/category';
import detail from './components/detail';
//https://react-guide.github.io/react-router-cn/docs/guides/advanced/DynamicRouting.html

ReactDOM.render((
		<Router history={hashHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Index} />
				<Route path="Index" component={Index} />
				<Route path="category" component={category} />
				<Route path="detail" component={detail} />
			</Route>
		</Router>
		), document.getElementById('app'));