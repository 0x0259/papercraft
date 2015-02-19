var littlest = require('littlest-isomorph');
var React = require('react');

var Banner = React.createClass({
  mixins: [littlest.Mixin],
  render: function () {
    return (
      <div className='banner'>
        <div className='banner__content'>
          <svg className='papercraft papercraft-p' width={this.props.size} height={this.props.size} viewBox='0 0 32 32'>
            <path className='papercraft-back' d='M0 0 L16 0 L12 32 L0 32 Z'/>
            <path className='papercraft-front' d='M0 0 L32 0 L30 20 L0 28 Z'/>
          </svg>
          <svg className='papercraft papercraft-a' width={this.props.size} height={this.props.size} viewBox='0 0 32 32'>
            <path className='papercraft-back' d=' M16 0 L32 32 L0 32 Z '/>
            <path className='papercraft-front' d=' M16 0 L20 24 L0 32 Z '/>
          </svg>
          <svg className='papercraft papercraft-p' width={this.props.size} height={this.props.size} viewBox='0 0 32 32'>
            <path className='papercraft-back' d='M0 0 L16 0 L12 32 L0 32 Z'/>
            <path className='papercraft-front' d='M0 0 L32 0 L30 20 L0 28 Z'/>
          </svg>
          <svg className='papercraft papercraft-e' width={this.props.size} height={this.props.size} viewBox='0 0 32 32'>
            <path className='papercraft-back' d='M0 0 L16 0 L32 16 L24 24 L32 32 L0 32 Z'/>
            <path className='papercraft-front' d='M0 0 L32 0 L0 32 Z'/>
          </svg>
          <svg className='papercraft papercraft-r' width={this.props.size} height={this.props.size} viewBox='0 0 32 32'>
            <path className='papercraft-back' d='M0 16 L32 32 L0 32 Z'/>
            <path className='papercraft-front' d='M0 0 L32 0 L30 20 L0 32 Z'/>
          </svg>
          <svg className='papercraft papercraft-c' width={this.props.size} height={this.props.size} viewBox='0 0 32 32'>
            <path className='papercraft-back' d='M0 0 L28 0 L0 32 Z'/>
            <path className='papercraft-front' d='M0 0 L30 0 L32 8 Z M0 8 L32 32 L0 32 Z'/>
          </svg>
          <svg className='papercraft papercraft-r' width={this.props.size} height={this.props.size} viewBox='0 0 32 32'>
            <path className='papercraft-back' d='M0 16 L32 32 L0 32 Z'/>
            <path className='papercraft-front' d='M0 0 L32 0 L30 20 L0 32 Z'/>
          </svg>
          <svg className='papercraft papercraft-a' width={this.props.size} height={this.props.size} viewBox='0 0 32 32'>
            <path className='papercraft-back' d=' M16 0 L32 32 L0 32 Z '/>
            <path className='papercraft-front' d=' M16 0 L20 24 L0 32 Z '/>
          </svg>
          <svg className='papercraft papercraft-f' width={this.props.size} height={this.props.size} viewBox='0 0 32 32'>
            <path className='papercraft-back' d='M0 0 L16 0 L32 16 L0 32 Z'/>
            <path className='papercraft-front' d='M0 0 L32 0 L0 32 Z'/>
          </svg>
          <svg className='papercraft papercraft-t' width={this.props.size} height={this.props.size} viewBox='0 0 32 32'>
            <path className='papercraft-back' d='M0 0 L32 0 L32 10 L22 10 L22 32 L10 32 L10 10 L0 10 Z'/>
            <path className='papercraft-front' d='M32 0 L32 10 L10 32 L10 10 Z'/>
          </svg>
        </div>
      </div>
    );
  }
});

module.exports = Banner;
