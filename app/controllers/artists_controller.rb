class ArtistsController < ApplicationController
  before_action :set_artist, only: [:show, :edit, :update, :destroy]
  respond_to :json

  def index
    respond_with Artist.all
  end

  def show
  end

  def create
    respond_with @artist.create(artist_params)
  end

  def update
    respond_with @artist.update(artist_params)
  end

  def destroy
    respond_with @artist.destroy
  end

private
  def set_artist
    @artist = Artist.find(params[:id])
  end

  def artist_params
    params.require(:artist).permit(:name, :listened)
  end
end