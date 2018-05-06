// @flow
export default function getInnerText(obj: any): string {
  var buf: string = '';
  if (obj) {
    var type = typeof(obj);
    if (type === 'string' || type === 'number') {
      buf += obj;
    } else if(type === 'object') {
      var children = null;
      if( Array.isArray(obj) ) {
        children = obj;
      } else {
        var props = obj.props;
        if( props ) {
          children = props.children;
        }
      }
      if(children) {
        if(Array.isArray(children)) {
          children.forEach(function(o) {
            buf += getInnerText(o);
          });
        } else {
          buf += getInnerText(children);
        }
      }
    }
  }
  return buf;
};