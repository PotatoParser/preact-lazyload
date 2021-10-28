import { Component, Fragment, h, createRef } from 'preact';

class LazyLoad extends Component {
	static observer = new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
			const { target } = entry;
			if (entry.isIntersecting) {
				target.dispatchEvent(new CustomEvent('startlazy'));
			} else {
				target.dispatchEvent(new CustomEvent('stoplazy'))
			}
		});
	});

	ref = createRef();

	startLazyLoad = e => {
		if (this.state.show) return;
		this.setState({ show: true });
	}

	stopLazyLoad = e => {
		if (!this.state.show) return;
		this.setState({ show: false });
	}

	componentDidMount() {
		this.ref.current.addEventListener('startlazy', this.startLazyLoad);
		this.ref.current.addEventListener('stoplazy', this.stopLazyLoad);
		LazyLoad.observer.observe(this.ref.current);
	}

	componentWillUnmount() {
		this.ref.current.removeEventListener('startlazy', this.startLazyLoad);
		this.ref.current.removeEventListener('stoplazy', this.stopLazyLoad);
		LazyLoad.observer.unobserve(this.ref.current);
	}

	render({ children, ...props }, { show }) {
		return (
			<div ref={this.ref} {...props}>
				{show && children}
			</div>
		);
	};
}

export default LazyLoad;