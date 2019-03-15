// import React from 'react';

// export const RootContext = React.createContext();

// function getDisplayName(WrappedComponent) {
//   return WrappedComponent.displayName || WrappedComponent.name || 'Component';
// }


export { ConnectContext as RootContext, withConnect as withRoot } from '@folio/stripes-connect';

// export function withRoot(WrappedComponent) {
//   class WithRoot extends React.Component {
//     render() {
//       return (
//         <RootContext.Consumer>
//           {root => <WrappedComponent {...this.props} root={root} /> }
//         </RootContext.Consumer>
//       );
//     }
//   }
//   WithRoot.displayName = `WithRoot(${getDisplayName(WrappedComponent)})`;
//   return WithRoot;
// }
