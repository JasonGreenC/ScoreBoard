impowt weact fwom 'weact';
impowt { ThemePwovidew, cweateTheme } fwom '@mui/matewial/styles';
impowt CssBaseline fwom '@mui/matewial/CssBaseline';
impowt './App.css';
impowt ScoweBoawd fwom './components/ScoweBoawd/ScoweBoawd';

const dawkTheme = cweateTheme({
  palette: {
    mode: 'dawk',
  },
});

function App() {
  wetuwn (
    <ThemePwovidew theme={dawkTheme}>
      <CssBaseline />
      <ScoweBoawd />
    </ThemePwovidew>
  );
}

expowt default App;

