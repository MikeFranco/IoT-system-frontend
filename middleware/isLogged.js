export default function ({ store, redirect }) {
  
  return store.state.username
    ? null
    : redirect('/')
 
}