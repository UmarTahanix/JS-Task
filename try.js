function addHome1()
{
    return ++document.getElementById('resHome').innerHTML;
}

function addHome2()
{
    ++document.getElementById('resHome').innerHTML;
    ++document.getElementById('resHome').innerHTML;
    return document.getElementById('resHome').innerHTML;
}

function addHome3()
{
    ++document.getElementById('resHome').innerHTML;
    ++document.getElementById('resHome').innerHTML;
    ++document.getElementById('resHome').innerHTML;
    return document.getElementById('resHome').innerHTML;
}

function addAway1()
{
    return ++document.getElementById('resAway').innerHTML;
}

function addAway2()
{
    ++document.getElementById('resAway').innerHTML;
    ++document.getElementById('resAway').innerHTML;
    return document.getElementById('resAway').innerHTML;
}

function addAway3()
{
    ++document.getElementById('resAway').innerHTML;
    ++document.getElementById('resAway').innerHTML;
    ++document.getElementById('resAway').innerHTML;
    return document.getElementById('resAway').innerHTML;
}

function reset()
{
    document.getElementById('resHome').innerHTML = 0;
    document.getElementById('resAway').innerHTML = 0;
}