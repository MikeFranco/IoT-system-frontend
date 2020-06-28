export default function ({ store, redirect }) {
  
  return store.state.userName
    ? null
    : redirect('/')
 
}