from rest_framework import serializers

from .models import Thread, Post

# import markdown_deux


class PostSerializer(serializers.ModelSerializer):
    # created_by = PublicProfileSerializer(source='created_by', read_only=True)
    # mardown_content = serializers.SerializerMethodField()
    #
    # def get_mardown_content(self, obj):
    #     return markdown_deux.markdown(obj.content, 'default')

    class Meta:
        fields = ['uid', 'content', 'created_by', 'created_on', 'parent', 'modified_on', 'level', 'score']
        read_only_fields = ('level', )
        model = Post


class ThreadSerializer(serializers.ModelSerializer):
    posts_in_tree_order = serializers.SerializerMethodField()

    def get_posts_in_tree_order(self, obj):
        posts_list = obj.op.get_descendants(include_self=True).select_related('created_by')
        # djeddit have one root post due 'op = models.ForeignKey('Post')' field
        serializer = PostSerializer(posts_list, many=True)
        return serializer.data

    class Meta:
        model = Thread
        fields = ['title', 'slug', 'views', 'posts_in_tree_order']

