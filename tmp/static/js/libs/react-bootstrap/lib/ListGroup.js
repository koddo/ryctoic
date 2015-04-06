define(["exports", "module", "react", "classnames", "./utils/ValidComponentChildren"], function (exports, module, _react, _classnames, _utilsValidComponentChildren) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

  var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

  var React = _interopRequire(_react);

  var cloneElement = _react.cloneElement;

  var classSet = _interopRequire(_classnames);

  var ValidComponentChildren = _interopRequire(_utilsValidComponentChildren);

  var ListGroup = (function (_React$Component) {
    function ListGroup() {
      _classCallCheck(this, ListGroup);

      if (_React$Component != null) {
        _React$Component.apply(this, arguments);
      }
    }

    _inherits(ListGroup, _React$Component);

    _createClass(ListGroup, {
      render: {
        value: function render() {
          var items = ValidComponentChildren.map(this.props.children, function (item, index) {
            return cloneElement(item, { key: item.key ? item.key : index });
          });

          return React.createElement(
            "div",
            { className: classSet(this.props.className, "list-group") },
            items
          );
        }
      }
    });

    return ListGroup;
  })(React.Component);

  ListGroup.propTypes = {
    className: React.PropTypes.string
  };

  module.exports = ListGroup;
});