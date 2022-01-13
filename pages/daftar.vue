<template>
  <div class="max-w-8xl mx-auto px-8 flex-1 flex w-full space-x-20">
    <div class="w-1/2 hidden lg:flex flex-col justify-center">
      <div class="w-full">
        <ImageDoodle img="FloatDoodle" />
      </div>
    </div>
    <div class="w-full lg:w-1/2 flex flex-col justify-center items-end">
      <div class="w-full lg:w-96">
        <Card>
          <CardHeader>DAFTAR</CardHeader>
          <CardBody>
            <form>
              <FormTextInput id="name" label="Nama Lengkap" />
              <FormTextInput id="email" label="Alamat E-mail" />
              <FormTextInput id="password" type="password" label="Kata sandi" />
              <div class="flex justify-end">
                <Button text="Daftar" size="md" />
              </div>
            </form>
          </CardBody>
          <CardFooter>
            daftar akun baru untuk melanjutkan.
            <Anchor :to="{ name: 'masuk' }">klik disini</Anchor> jika sudah memiliki akun.
          </CardFooter>
        </Card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  layout: 'page',
  setup() {
    const form = reactive({
      email: '',
      password: '',
    })
    const login = () => {}
    return {
      form,
      login,
    }
  }
})
</script>