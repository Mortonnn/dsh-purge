window.__ModuleLoader__.load({ id: "dsh-purge", factory: (require) => {
	var module = { exports: {} };
	var exports = module.exports;
	Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

	const name = "dsh-purge";
	const inject = [];

	function apply(ctx) {
		// Clean / No-op: 前端不注入任何悬浮窗、Dock、遮罩、提示或按钮
	}

	exports.name = name;
	exports.inject = inject;
	exports.apply = apply;
	return module.exports;
}});
