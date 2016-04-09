module UrlsHelper
  def host_url(url)
    base_url = url.gsub(/^\//, '')
    URI.join(data.site.url, base_url)
  end
end
