<script setup>
    import { ref } from 'vue'

// GETTER
    const props = defineProps(
        {
            user:
            {
                type:Object,
                required: true
            }
        }
    )

    console.log(props.user.name)

// SENDERS
    const emit = defineEmits(['show-user-params'])
    function paramsHandler()
    {
        emit('show-user-params')
    }


// 

const isShownList=ref(false)

function toggleList()
{
    isShownList.value= !isShownList.value;
}

function sendListValue(val)
{

}


</script>

<template>
        <div class="user-profile-container">

            <button @click="toggleList"></button>
            <ul :class="{'show': isShownList}">
                <li  data-user="1" @click="sendListValue(1)">Params</li>
                <li data-user="2" @click="sendListValue(2)">yadayada</li>
                <li data-user="3" @click="sendListValue(3)">Log out</li>
            </ul>
        </div>
</template>


<style scoped>

/* CUSTOM PROPERTIES */
    @property --profileSize
    {
    syntax: "<length>";
    inherits: false;
    initial-value: 40px;
    }
    .user-profile-container
    {
        width:35%;
        font-size: 12px;
        font-family: Roboto;
        margin-left: auto; 
        margin-right: 0;
    }
    .user-profile-container button
    {
        background-color: transparent;
        background-image: url("/user_profile_icon.png");
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-size: 80%;
 
        height: var(--profileSize);
        width: var(--profileSize);

        border: 2px solid white;
        border-radius: 20px;

        transition: .2s;
        box-sizing: border-box;
    }
        .user-profile-container button:hover
    {
        background-color: rgb(216, 194, 253);

        background-position: 50% 50%;
        background-size: 100%;

        height: var(--profileSize);
        width: var(--profileSize);
        
        border: 4px double white;
        border-radius: 20px;

        scale: 150%;
    }



    .user-profile-container ul
    {
        opacity:0;

        position:absolute;
        top: 8%;
        right:2%;

        background: linear-gradient(0deg, var(--white) 10%, white 100%);
        padding: 20px;
        z-index:100;
        border: 1px solid var(--header);
        border-radius: 10px;

        transition:.5s;
    }

    @keyframes expand
    {
        0% 
        {
            transform: scale(100%, 0%);
            opacity:0;
        }
        80% 
        {
            transform: scale(100%, 120%);
            opacity:1;
        }
        94% 
        {
            transform: scale(100%, 90%);
            opacity:1;
        }
        100% 
        {
            transform: scale(100%, 100%);
            opacity:1;
        }
    }

    .show
    {
        transform-origin: 0% top;

        opacity: 1 !important;
        animation: expand .4s;
    }

    .user-profile-container li
    {
        list-style-type:none;
        padding:10px;
        color:var(--header);
    }
    .user-profile-container li:hover
    {
        background-color:var(--header);
        color:var(--white);
        border: 0px solid white;
        border-radius:10px;
    }



</style>
