import React, {PureComponent} from 'react';
import classnames from 'classnames';

import withTheme from 'kune-ui-hocs/withTheme';

type Props = {
  children: Node,
  className?: string,
  src?: void|null|string,
  alt?: void|null|string
};

class Image extends PureComponent<Props> {
  imgElement = null;
  source = null;
  dimensions = {
    width: 50,
    height: 50
  };
  loaded = false;
  dimensionInterval = null;
  dimensionTimeout = null;

  onSourceSet = ():void => {
    const {
      imgElement,
      source
    } = this;

    clearInterval(this.dimensionInterval);
    clearTimeout(this.dimensionTimeout);

    if (typeof source === 'string') {
      imgElement.src = source;

      this.dimensionInterval = setInterval(():void => {
        if (this.imgElement.naturalWidth) {
          clearInterval(this.dimensionInterval);

          this.dimensions = {
            width: this.imgElement.naturalWidth,
            height: this.imgElement.naturalHeight
          };

          this.forceUpdate();
        }
      }, 100);

      this.dimensionTimeout = setTimeout(():void => {
        clearInterval(this.dimensionInterval);
      }, 30000);
    }
  };

  componentDidMount() {
    if (document) {
      const img = document.createElement('img');
      const src = this.props.src || null;

      img.onload = ():void => {
        this.loaded = true;

        this.forceUpdate();
      };

      this.imgElement = img;
      this.source = src;

      this.onSourceSet();
    }
  }

  componentWillReceiveProps(nextProps: any) {
      this.loaded = false;
      this.source = nextProps.src || null;

      this.onSourceSet();
  }

  componentWillUnmount() {
    clearInterval(this.dimensionInterval);
    clearTimeout(this.dimensionTimeout);
  }

  render() {
    const {
      imgElement,
      source,
      loaded,
      dimensions
    } = this;

    const {
      src,
      alt,
      children,
      className,
      ...restProps
    } = this.props;

    if (imgElement && loaded) {
      return (
        <img className={classnames(className, 'image')} src={src} alt={alt} {...restProps}/>
      );
    }

    return (
      <div className={classnames(className, 'image-placeholder')} style={dimensions}>
        {children || alt}
      </div>
    );
  }
}

export default withTheme(Image, 'Image');
