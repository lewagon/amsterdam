module UrlsHelper
  def host_url(url)
    # remove the first / char
    base_url = url.gsub(/^\//, '')
    URI.join(data.site.url, base_url)
  end
end
