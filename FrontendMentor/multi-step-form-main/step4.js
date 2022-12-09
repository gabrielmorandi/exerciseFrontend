var totalValue = 0
const writePlan = document.querySelector('.confirm p')
const plan = sessionStorage.getItem("radio")
const year = sessionStorage.getItem("check")
if (year == 'true') {
    writePlan.innerHTML = plan + ' (yearly)'
} else {
    writePlan.innerHTML = plan + ' (monthly)'
}

const services = document.querySelector('.services')
var html = ''
const online = sessionStorage.getItem("online")
const storage = sessionStorage.getItem("storage")
const profile = sessionStorage.getItem("profile")
const planValue = document.querySelector('.change p')
if (year == 'true') {
    if (plan == 'Pro') {
        planValue.innerHTML = '150$/yr'
        totalValue += 150
    } else if (plan == 'Advanced') {
        planValue.innerHTML = '120$/yr'
        totalValue += 120
    } else if (plan == 'Arcade') {
        planValue.innerHTML = '90$/yr'
        totalValue += 90
    }
    if (online == 'Online service') {
        html += '<div><p>Online service</p><p>+$10/mo</p></div>'
        totalValue += 10
    }
    if (storage == 'Larger storage') {
        html += '<div><p>Larger storage</p><p>+$20/mo</p></div>'
        totalValue += 20
    }
    if (profile == 'Custom profile') {
        html += '<div><p>Customizable profile</p><p>+$20/mo</p></div>'
        totalValue += 20
    }
    services.innerHTML = html
} else {
    if (plan == 'Pro') {
        planValue.innerHTML = '15$/yr'
        totalValue += 15
    } else if (plan == 'Advanced') {
        planValue.innerHTML = '12$/yr'
        totalValue += 12
    } else if (plan == 'Arcade') {
        planValue.innerHTML = '9$/yr'
        totalValue += 9
    }
    if (online == 'Online service') {
        html += '<div><p>Online service</p><p>+$1/mo</p></div>'
        totalValue += 1
    }
    if (storage == 'Larger storage') {
        html += '<div><p>Larger storage</p><p>+$2/mo</p></div>'
        totalValue += 2
    }
    if (profile == 'Custom profile') {
        html += '<div><p>Customizable profile</p><p>+$2/mo</p></div>'
        totalValue += 2
    }
    services.innerHTML = html
}

const resTxt = document.querySelector('.total p')
const res = document.querySelector('.result')
if (year == 'true') {
    resTxt.innerHTML = 'Total (per year)'
    res.innerHTML = '$' + totalValue + '/yr'
} else {
    resTxt.innerHTML = 'Total (per month)'
    res.innerHTML = '$' + totalValue + '/mo'
}
