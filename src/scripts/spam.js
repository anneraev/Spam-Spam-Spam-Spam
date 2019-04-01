const emails = customers.map(customer => {
    return customer.contacts.email.map(email => {
        return email
    })
})

console.log("array of arrays", emails);

//Found this solution online. Opted to use this over .flatten() as this is still essentially the same concat function I'm familiar with, however I haven't researched much about how this works.
const mergedEmails = [].concat.apply([], emails);

console.log("array of emails", mergedEmails);