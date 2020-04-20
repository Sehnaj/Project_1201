var Genre = require('../models/genre');
var Book = require('../models/book');
var async = require('async');

// Display list of all Genre.
exports.genre_list = function(req, res) {
    async.parallel({
        genre: function(callback) {
            Genre.find({}, function(err, data) {
                data.sort(function(a, b) {
                    var textA = a.first_name;
                    var textB = b.first_name;
                    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
                });
                res.render('genre_list', 
                {
                    title: 'Genre List',
                    list_genres: data,
                });
            });
        }
    })
   
    //res.send('Students IMPLEMENT: Genre list, to display each Genre name in ascending order. Use genre_list view');
};

// Display detail page for a specific Genre.
exports.genre_detail = function(req, res) {
    async.parallel({
        genre: function(callback) {
            Genre.findById({_id: req.params.id}, function(err, data) {
                
                res.render('genre_detail', {
                    genre_books: data,
                });
            });
        }
    })
    
    //res.send('Students IMPLEMENT: Genre detail: ' + req.params.id + 'Use genre_detail view. You should dispaly genre name, and all books in this genre.');
};



// Display Genre create form on GET.
exports.genre_create_get = function(req, res) {
    res.render('genre_form');
    //res.send('Bonus: Student IMPLEMENT: Genre create GET. Use genre_form view');
};

// Handle Genre create on POST.

exports.genre_create_post = function(req, res) {
    
    var genre = new Genre(
        {
            name: req.body.name
        }
    );
    genre.save(function(err) {
        res.redirect('/');
    });
    //res.send('Bonus: Student IMPLEMENT: Genre create POST. Use genre_form view');
};

// Display Genre delete form on GET.
exports.genre_delete_get = function(req, res) {
    
    res.send('NOT IMPLEMENTED: Genre delete GET');
};

// Handle Genre delete on POST.
exports.genre_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre delete POST');
};

// Display Genre update form on GET.
exports.genre_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre update GET');
};

// Handle Genre update on POST.
exports.genre_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre update POST');
};