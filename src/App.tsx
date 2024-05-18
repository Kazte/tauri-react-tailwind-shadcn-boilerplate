import { invoke } from '@tauri-apps/api/tauri';
import { useState } from 'react';

function App() {
  const [greetMsg, setGreetMsg] = useState('');
  const [name, setName] = useState('');

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke('greet', { name }));
  }

  return (
    <>
      <h1>Welcome to Tauri!</h1>

      <p>This is a simple example of a Tauri app using React.</p>
      <p>Using Tailwind and shadcn's UI components.</p>

      <div className='flex-1 flex flex-col justify-center items-center'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            greet();
          }}
          autoComplete='off'
        >
          <input
            id='greet-input'
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder='Enter a name...'
          />
          <button type='submit'>Greet</button>
        </form>

        {greetMsg && <p>{greetMsg}</p>}
      </div>
    </>
  );
}

export default App;
