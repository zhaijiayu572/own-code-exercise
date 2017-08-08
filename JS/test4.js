var prefixCls = 'alert';
function wrapClasses () {
        return [
          `${prefixCls}`,
          `${prefixCls}--${this.type}`,
          {
            [`${prefixCls}--with-icon`]: this.showIcon,
            [`${prefixCls}--with-desc`]: this.desc
          }
        ]
    };
console.log(wrapClasses());