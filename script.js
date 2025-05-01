const signupSectionEl = document.querySelector('.signup-section')
const btnJoin = document.querySelector('.btn-join')


document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const membership = document.getElementById('membership').value;
    
    // Basic validation
    if (!fullname || !email || !phone || !membership) {
        alert('Please fill in all fields');
        return;
    }
    
    // Here you would typically send the data to your server
    handleformaddingproductselsubmit()
    // For now, we'll just show a success message
    alert(`Thanks for signing up, ${fullname}! We'll contact you shortly to complete your ${membership} membership.`);
    
    // Reset the form
    this.reset();
});

const openSignupSection = () => {
signupSectionEl.style.display = 'flex'
}

const closeSignupSection = () => {
signupSectionEl.style.display = 'none'
}

const handleformaddingproductselsubmit = (event) => {
  event.preventDefault()
  const formdata = new FormData(formForUsers)
  const newuser = {id:Math.random(), ...Object.fromEntries(formdata)}
  console.log(newuser)
  closeModalWrapperEL()
}

btnJoin.addEventListener('click', openSignupSection)