import {StyleSheet} from 'react-native';

// permet d'accéder a des globales
import {Constants} from 'src/constants/Constants.js';

/**
 * Ci-dessous, voici les styles à
 * appliquer à la page App.js
 *
 */
const styles = StyleSheet.create({
  container: {
    backgroundColor: Constants.defaultBackgroundColor,
    flex: 1,
    justifyContent: 'center',
  },
  blackText: {
    color: 'black',
    margin: 10,
    padding: 10,
  },
});

export {styles};
