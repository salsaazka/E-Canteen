export default function ConvertToRP(param) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(param)
}
