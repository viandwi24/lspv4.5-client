<template>
  <div class="max-w-8xl mx-auto px-8 flex-1 flex w-full space-x-20">
    <div class="w-full lg:w-1/2 flex flex-col justify-center">
      <div class="w-full lg:w-96">
        <Card>
          <CardHeader>MASUK</CardHeader>
          <CardBody>
            <form>
              <FormTextInput id="email" label="Alamat E-mail" />
              <FormTextInput id="password" type="password" label="Kata sandi" />
              <div class="flex justify-end">
                <Button text="Masuk" size="md" />
              </div>
            </form>
          </CardBody>
          <CardFooter>
            masuk dengan akun anda.
            <Anchor :to="{ name: 'daftar' }">klik disini</Anchor> untuk mendaftar.
          </CardFooter>
        </Card>
      </div>
    </div>
    <div class="w-1/2 hidden lg:flex flex-col justify-center">
      <div class="w-full">
        <ImageDoodle img="MessyDoodle" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  layout: 'page',
  setup() {
    useMeta({
      title: 'Masuk | LSP APP v4.5 - SMKN 1 MOJOKERTO',
    })
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