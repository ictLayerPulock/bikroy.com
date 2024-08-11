<template>
  <header>
    <q-bar dense class="bg-green-5 text-white" style="height: 200px;">
      <div>mobil-net</div>
      <q-icon name="email" />
      <q-space />
      <q-icon name="bluetooth" />
      <q-icon name="signal_wifi_4_bar" />
      <q-icon name="signal_cellular_4_bar" />
      <div class="gt-xs">100%</div>
      <q-icon name="battery_full" />
      <div>10:00AM</div>
    </q-bar>
  </header>
  <slot />
  <footer>
    <q-bar dark class="bg-grey-4 text-white" style="height: 400px;">
      <div class="col text-center text-weight-bold">
        My-App
      </div>
    </q-bar>
  </footer>
</template>