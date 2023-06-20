<template>
  <div>
    <Base>
      <template #list>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
      </template>
      <template #images>
        <img
          src="@/assets/img/img.png"
          alt=""
        />
      </template>
      <template #table>
        <table>
          <thead>
            <tr>
              <th>Colonne 1</th>
              <th>Colonne 2</th>
            </tr>
          </thead>
        </table>
      </template>
    </Base>
  </div>
</template>
<script>
import Base from "./Base.vue";
export default {
  components: {
    Base,
  },
};
</script>