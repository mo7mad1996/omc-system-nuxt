<template>
  <div class="col-2">
    <div class="user-img">
      <img src="/home/users/1.jpg" />
    </div>
    <ul class="links">
      <li>
        <nuxt-link to="/">
          <figure>
            <img src="/home/settings/user.png" alt="Trulli" />
            <figcaption>إضافة مستحدمين</figcaption>
          </figure>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/">
          <figure>
            <img src="/home/settings/report.png" alt="تقرير" />
            <figcaption>تقرير اسماء الحسابات</figcaption>
          </figure>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/">
          <figure>
            <img src="/home/settings/lock.png" alt="كلمه المرور" />
            <figcaption>تغير كلمه السر</figcaption>
          </figure>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/">
          <figure>
            <img src="/home/settings/database.png" alt="تفريغ البرنامج" />
            <figcaption>تفريغ البرنامج</figcaption>
          </figure>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/">
          <figure>
            <img src="/home/settings/info.png" alt="عن البرنامج" />
            <figcaption>عن البرنامج</figcaption>
          </figure>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Edits',
}
</script>

<style scoped lang="scss">
.user-img {
  padding: 10px;

  img {
    width: 100%;
  }
}
.links {
  padding: none;
  list-style: none;
  text-align: center;

  li {
    margin-bottom: 20px;
  }
  figure {
    figcaption {
      background: #3d6dc7;
      box-shadow: inset 0 -4px 4px #333;
      padding: 5px 10px;
      border-radius: 5px;
    }
    img {
      height: 40px;
      margin-bottom: 10px;
    }
  }
}
</style>
